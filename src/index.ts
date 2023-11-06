import fs from "fs";
import { mailwindCss, MailwindOptions } from "./mailwind";

import yargs from "yargs/yargs";

const y = yargs(process.argv.slice(2))
    .string("input-css")
    .string("input-html")
    .string("output-css")
    .string("output-html")
    .string("tailwind-config")
    .string("reset")
    .describe("input-css", "The path to your custom CSS file")
    .describe("input-html", "The path to your input HTML file")
    .describe("output-css", "The path to the CSS file that will be generated")
    .describe("output-html", "The path to the inlined HTML file that will be generated")
    .describe("tailwind-config", "The path to your custom Tailwind config file")
    .describe("reset", "Set to `false` to disable extended resets");

const main = async (): Promise<void> => {
    const argv = await y.argv;

    const inputHtmlPath = argv["input-html"];
    const outputHtmlPath = argv["output-html"];

    const inputCssPath = argv["input-css"];
    const outputCssPath = argv["output-css"];

    const tailwindConfigPath = argv["tailwind-config"];

    const reset = argv["reset"];

    if (inputHtmlPath == null) {
        console.log("The --input-html option is required.");
        return;
    }
    if (outputCssPath == null && outputHtmlPath == null) {
        console.log("Either --output-css or --output-html options must be specified.");
        return;
    }

    const inputHtml = fs.readFileSync(inputHtmlPath, "utf-8");

    const options: MailwindOptions = {
        css: inputCssPath != null ? fs.readFileSync(inputCssPath, "utf-8") : undefined,
        tailwindConfigPath,
        reset: reset === "false" ? false : true,
    };

    const output = await mailwindCss(inputHtml, options);

    if (output == null) {
        console.log("Failed to generate output.");
        return;
    }
    const { html, css } = output;

    if (outputHtmlPath != null) {
        fs.writeFileSync(outputHtmlPath, html);
    }
    if (outputCssPath != null) {
        fs.writeFileSync(outputCssPath, css);
    }
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
