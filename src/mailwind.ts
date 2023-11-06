import fs from "fs";
import juice from "juice";
import os from "os";
import path from "path";
import { rehype } from "rehype";
import rehypeRewrite from "rehype-rewrite";
import stringify from "rehype-stringify";

import resetStyles from "../styles/reset.scss?inline";
import universalStyles from "../styles/universal.scss?inline";

import { TAILWIND_CONFIG_PATH, exec } from "./utils";

interface MailwindOptions {
    /** A path to your tailwind.css file, optimized for email */
    tailwindConfigPath?: string;
    /** The base px value for 1rem, defaults to 16px */
    basePx?: number;
    /** Set to `false` to disable extended resets */
    reset?: boolean;
    /** Custom CSS to be injected */
    css?: string;
}

const createStyleNode = (css: string) => {
    return {
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: css }],
    };
};

const resolveCssVariables = (s: string): string => {
    const VARIABLE_DEF_REGEX = /(--[a-zA-Z0-9-_]+)\s*:\s(.+?);/g;
    const VARIABLE_USAGE_REGEX = /var\((\s*--[a-zA-Z0-9-_]+\s*)(?:\)|,\s*(.*)\))/;

    // pass 1: pull definitions
    const defs = new Map<string, string>();
    let withoutDefs = s.replace(VARIABLE_DEF_REGEX, (_, def: string, value: string) => {
        defs.set(def.trim(), value.trim());
        return "";
    });

    const MAX_CYCLES = 1000;

    // pass 2: replace variables
    let maxCycles = MAX_CYCLES;
    while (withoutDefs.match(VARIABLE_USAGE_REGEX)) {
        maxCycles--;
        if (maxCycles <= 0) {
            throw new Error("Max Cycles for replacement exceeded");
        }
        withoutDefs = withoutDefs.replace(
            VARIABLE_USAGE_REGEX,
            (_, def: string, fallback: string) => {
                const d = def.trim();
                if (defs.has(d)) {
                    return defs.get(d) ?? "";
                }
                return (fallback ?? "").trim();
            }
        );
    }
    // return clean result
    return withoutDefs;
};

const hypeHtml = (html: string, css?: string[]) => {
    const hyped = rehype()
        .use(rehypeRewrite, {
            rewrite: (node) => {
                if (node.type !== "element") {
                    return node;
                }

                // inline styles into the <head>
                if (node.tagName === "head") {
                    if (css != null) {
                        const tmp = [
                            ...node.children,
                            ...css.map((c) => createStyleNode(c)),
                        ];
                        // @ts-ignore
                        node.children = tmp;
                    }
                }

                node.properties = {
                    ...node.properties,
                    style: resolveCssVariables(`${node.properties?.style ?? ""}`),
                };
            },
        })
        .use(stringify)
        .processSync(html)
        .toString();

    return hyped;
};

const updateIgnoredPseudos = (css: string): void => {
    // Define a regex to match Tailwind pseudo-classes.
    const PSEUDO_CLASSES_REGEX = /(?<=\:)[a-z0-9-]+(?=\:)/g;

    const foundPseudos = css.match(PSEUDO_CLASSES_REGEX) || [];
    foundPseudos.forEach((pseudo) => {
        if (!juice.ignoredPseudos.includes(pseudo)) {
            juice.ignoredPseudos.push(pseudo);
        }
    });
};

const inlineStyles = (html: string, tailwindCss: string, extraCss?: string[]) => {
    const juiceOptions: juice.Options = {
        inlinePseudoElements: true,
        preserveImportant: true,
        applyStyleTags: true,

        removeStyleTags: true,
        insertPreservedExtraCss: true,

        preservePseudos: true,
        preserveFontFaces: true,
        preserveMediaQueries: true,
        preserveKeyFrames: true,

        // !BUG - this is not working
        // resolveCSSVariables: true,
    };

    updateIgnoredPseudos(tailwindCss);
    if (extraCss != null) {
        extraCss.forEach((css) => {
            updateIgnoredPseudos(css);
        });
    } else {
        extraCss = [];
    }

    const htmlWithCss = hypeHtml(html, [tailwindCss]);
    const juiced = juice(htmlWithCss, juiceOptions);
    const hyped = hypeHtml(juiced, extraCss);

    return hyped;
};

const mailwindCss = async (inputHtml: string, options: MailwindOptions) => {
    const tailwindCssPath = require.resolve("tailwindcss/lib/cli.js");
    const tailwindConfigPath = options.tailwindConfigPath ?? TAILWIND_CONFIG_PATH;

    const tmpInputHtmlPath = path.join(os.tmpdir(), "mailwind-input.html");
    fs.writeFileSync(tmpInputHtmlPath, inputHtml);

    const tmpInputCssPath = path.join(os.tmpdir(), "mailwind-input.css");
    fs.writeFileSync(tmpInputCssPath, options.css ?? "");

    const tmpTailwindCssPath = path.join(os.tmpdir(), "mailwind-output.css");
    fs.writeFileSync(tmpTailwindCssPath, "");

    const args = [
        tailwindCssPath,
        "--config",
        tailwindConfigPath,
        "--output",
        tmpTailwindCssPath,
        "--content",
        tmpInputHtmlPath,
    ];
    if (options.css) {
        args.push("--input");
        args.push(tmpInputCssPath);
    }

    const result = await exec(process.argv0, args);

    if (result.exit_code !== 0) {
        console.error("Failed to run Tailwind.");
        console.error(result.stderr);
        return;
    }

    const tailwindCss = fs.readFileSync(tmpTailwindCssPath, "utf-8") ?? "";

    return {
        html: inlineStyles(inputHtml, tailwindCss, [resetStyles, universalStyles]),
        css: tailwindCss,
    };
};

export { MailwindOptions, mailwindCss };
