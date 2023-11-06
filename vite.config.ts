import { defineConfig } from "vitest/config";
import path from "path";
import dts from "vite-plugin-dts";
import autoprefixer from "autoprefixer";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
    base: "./",
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },

    build: {
        sourcemap: true,
        minify: false,
        outDir: path.resolve(__dirname, "./dist/"),
        emptyOutDir: true,

        target: "modules",

        rollupOptions: {
            external: [
                // node builtins
                // "child_process",
                // "fs",
                // "module",
                // "path",
                // "os",
                // "yargs",
                // "rehype",
                // "rehype-rewrite",
                // "rehype-stringify",
                // "juice",
                // "child_process",
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
    ],
});
