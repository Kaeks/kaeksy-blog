import { resolveConfig } from "vite";
import { sync } from "glob";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
    root: "./src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/**/*.html".replace(/\\/g, "/"))
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, "partials")
        })
    ]
};