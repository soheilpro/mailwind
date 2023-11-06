import autoprefixer from "autoprefixer";
import path from "path";
import commonjs from "vite-plugin-commonjs";
import dts from "vite-plugin-dts";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { defineConfig } from "vitest/config";

const SHEBANG = "#!/usr/bin/env node\n";

const prependShebangPlugin = {
    name: "prepend-shebang",
    renderChunk(code, chunk, options) {
        if (chunk.fileName.endsWith(".cjs")) {
            return SHEBANG + code;
        }
        return null; // Return null to signify no change to the chunk
    },
};

export default defineConfig({
    base: "./",
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },

    build: {
        sourcemap: true,
        minify: true,
        outDir: path.resolve(__dirname, "./dist/"),
        emptyOutDir: true,

        target: "modules",

        rollupOptions: {
            external: [
                // node builtins
                "child_process",
                "process",
                "fs",
                "module",
                "path",
                "os",
                "child_process",
                // node modules
                "yargs/yargs",
                "yargs/helpers",
            ],
        },

        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "Mailwind",
            fileName: "mailwind",

            formats: ["cjs", "es"],
        },
    },

    test: {
        include: ["./test/*.test.ts"],

        coverage: {
            reporter: ["text", "json", "html"],
        },
        cache: false,
        watch: true,
    },

    plugins: [
        commonjs(),
        dts(),
        nodePolyfills({
            protocolImports: true,
        }),
        prependShebangPlugin,
    ],
});
