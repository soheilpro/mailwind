import { mailwindCss } from "../src/mailwind";
import { describe, it, assert } from "vitest";
// import fs to read a file:
import fs from "fs";

describe("windy", () => {
    it("should inline css", async () => {
        const inputHtmlPath = fs.readFileSync("./test/email.html", "utf-8");
        const outputHtmlPath = "./test/email.output.html";
        const outputCssPath = "./test/email.output.css";

        const output = await mailwindCss(inputHtmlPath, {});

        if (output == null) {
            assert.fail("Failed to generate output. Check the console for errors.");
            return;
        }

        const { html, css } = output;

        fs.writeFileSync(outputHtmlPath, html);
        fs.writeFileSync(outputCssPath, css);

        assert.ok(true);
    });
});
