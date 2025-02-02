import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./lib/test/setup.tsx"],
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "lab/generate/generate-component/templates/template.test.ts",
      "**/node_modules/**",
      "**/dist/**",
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./lib"),
      "@test": path.resolve(__dirname, "./lib/test"),
      "@styles": path.resolve(__dirname, "./lib/styles"),
      "@providers": path.resolve(__dirname, "./lib/providers"),
      "@components": path.resolve(__dirname, "./lib/components"),
      "@utils": path.resolve(__dirname, "./lib/utils"),
      "@hooks": path.resolve(__dirname, "./lib/hooks"),
      "@types": path.resolve(__dirname, "./lib/types"),
      "@constants": path.resolve(__dirname, "./lib/constants"),
    },
  },
});
