import dts from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = [
  {
    input: "lib/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "lib",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "lib",
      },
    ],
    plugins: [
      alias({
        entries: [
          {
            find: /^@headwinds/cross-country\/components/,
            replacement: path.resolve(__dirname, "lib/components/index.ts"),
          },
          {
            find: /^@headwinds/cross-country\/providers/,
            replacement: path.resolve(__dirname, "lib/providers/index.ts"),
          },
          {
            find: /^@headwinds/cross-country\/constants/,
            replacement: path.resolve(__dirname, "lib/constants/index.ts"),
          },
          {
            find: /^@headwinds/cross-country\/models/,
            replacement: path.resolve(__dirname, "lib/models/index.ts"),
          },
          {
            find: /^@headwinds/cross-country\/(.*)/,
            replacement: path.resolve(__dirname, "lib/$1"),
          },
        ],
      }),
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist/types",
        rootDir: "./lib",
        sourceMap: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "lib/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      alias({
        entries: [
          {
            find: "@headwinds/cross-country/components",
            replacement: path.resolve(__dirname, "lib/components"),
          },
          {
            find: "@headwinds/cross-country/constants",
            replacement: path.resolve(__dirname, "lib/constants"),
          },
          {
            find: "@headwinds/cross-country/providers",
            replacement: path.resolve(__dirname, "lib/providers"),
          },
          {
            find: "@headwinds/cross-country/models",
            replacement: path.resolve(__dirname, "lib/models"),
          },
          {
            find: "@headwinds/cross-country",
            replacement: path.resolve(__dirname, "lib"),
          },
        ],
      }),
      dts(),
    ],
  },
];

export default config;