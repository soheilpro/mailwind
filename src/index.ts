import fs from "fs";
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { mailwindCss, MailwindOptions } from "./mailwind";

const y = yargs(hideBin(process.argv))
    .option("input-html", {
        alias: "i",
        describe: "The path to your input HTML file",
        type: "string",
        default: "./data/email.html",
        demandOption: true,
    })
    .option("output-html", {
        alias: "o",
        describe: "The path to the inlined HTML file that will be generated",
        type: "string",
        default: "./data/email.output.html",
        demandOption: true,
    })
    .option("input-css", {
        alias: "c",
        type: "string",
        describe: "The path to your custom CSS file",
    })
    .option("output-css", {
        type: "string",
        describe: "The path to the CSS file that will be generated",
    })
    .option("tailwind-config", {
        type: "string",
        describe: "The path to your custom Tailwind config file",
    })
    .option("reset", {
        type: "string",
        describe: "Set to `false` to disable extended resets",
    });

const main = async (): Promise<void> => {
    console.log("Running mailwind...");
    const argv = await y.argv;

    const inputHtmlPath = argv["input-html"];
    const outputHtmlPath = argv["output-html"];

    const inputCssPath = argv["input-css"];
    const outputCssPath = argv["output-css"];

    const tailwindConfigPath = argv["tailwind-config"];

    const reset = argv["reset"];

    const inputHtml = fs.readFileSync(inputHtmlPath, "utf-8");

    const options: MailwindOptions = {
        css: inputCssPath ? fs.readFileSync(inputCssPath, "utf-8") : undefined,
        tailwindConfigPath,
        reset: reset === "false" ? false : true,
    };

    const output = await mailwindCss(inputHtml, options);

    if (!output) {
        console.log("Failed to generate output.");
        return;
    }
    const { html, css } = output;

    if (outputHtmlPath) {
        fs.writeFileSync(outputHtmlPath, html);
    }
    if (outputCssPath) {
        fs.writeFileSync(outputCssPath, css);
    }
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
