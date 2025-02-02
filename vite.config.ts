import react from "@vitejs/plugin-react";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import css from "rollup-plugin-css-only";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@headwinds/cross-country": resolve(__dirname, "./lib"),
      "@headwinds/cross-country/components": resolve(
        __dirname,
        "./lib/components"
      ),
      "@headwinds/cross-country/atoms": resolve(
        __dirname,
        "./lib/components/atoms"
      ),
      "@headwinds/cross-country/molecules": resolve(
        __dirname,
        "./lib/components/molecules"
      ),
      "@headwinds/cross-country/organisms": resolve(
        __dirname,
        "./lib/components/organisms"
      ),
      "@headwinds/cross-country/services": resolve(__dirname, "./lib/services"),
      "@headwinds/cross-country/providers": resolve(
        __dirname,
        "./lib/providers"
      ),
      "@headwinds/cross-country/styles": resolve(__dirname, "./lib/styles"),
      "@headwinds/cross-country/constants": resolve(
        __dirname,
        "./lib/constants"
      ),
      "@headwinds/cross-country/templates": resolve(
        __dirname,
        "./lib/templates"
      ),
      "@headwinds/cross-country/test/setup": resolve(__dirname, "./lib/test"),
    },
  },
  plugins: [react(), css({ output: "bundle.css" }), dts({ include: ["lib"] })],
  build: {
    cssCodeSplit: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"], // externalize react to avoid bundling it
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", { ignore: "lib/**/*.stories.tsx" })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        //dir: 'dist',
        //format: 'es',
        inlineDynamicImports: false,
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
