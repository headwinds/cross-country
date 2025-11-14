// vite.config.ts
import react from "file:///Users/brandon.flowers/cross-country/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21/node_modules/@vitejs/plugin-react/dist/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///Users/brandon.flowers/cross-country/node_modules/.pnpm/glob@10.4.5/node_modules/glob/dist/esm/index.js";
import { defineConfig } from "file:///Users/brandon.flowers/cross-country/node_modules/.pnpm/vite@5.4.21/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/brandon.flowers/cross-country/node_modules/.pnpm/vite-plugin-dts@3.9.1_rollup@4.52.5_typescript@5.9.3_vite@5.4.21/node_modules/vite-plugin-dts/dist/index.mjs";
import css from "file:///Users/brandon.flowers/cross-country/node_modules/.pnpm/rollup-plugin-css-only@4.5.5_rollup@4.52.5/node_modules/rollup-plugin-css-only/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/brandon.flowers/cross-country";
var __vite_injected_original_import_meta_url = "file:///Users/brandon.flowers/cross-country/vite.config.ts";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./"),
      "@headwinds/cross-country": resolve(__vite_injected_original_dirname, "./lib"),
      "@headwinds/cross-country/components": resolve(
        __vite_injected_original_dirname,
        "./lib/components"
      ),
      "@headwinds/cross-country/atoms": resolve(
        __vite_injected_original_dirname,
        "./lib/components/atoms"
      ),
      "@headwinds/cross-country/molecules": resolve(
        __vite_injected_original_dirname,
        "./lib/components/molecules"
      ),
      "@headwinds/cross-country/organisms": resolve(
        __vite_injected_original_dirname,
        "./lib/components/organisms"
      ),
      "@headwinds/cross-country/services": resolve(__vite_injected_original_dirname, "./lib/services"),
      "@headwinds/cross-country/providers": resolve(
        __vite_injected_original_dirname,
        "./lib/providers"
      ),
      "@headwinds/cross-country/styles": resolve(__vite_injected_original_dirname, "./lib/styles"),
      "@headwinds/cross-country/constants": resolve(
        __vite_injected_original_dirname,
        "./lib/constants"
      ),
      "@headwinds/cross-country/templates": resolve(
        __vite_injected_original_dirname,
        "./lib/templates"
      ),
      "@headwinds/cross-country/test/setup": resolve(__vite_injected_original_dirname, "./lib/test")
    }
  },
  plugins: [react(), css({ output: "bundle.css" }), dts({ include: ["lib"] })],
  build: {
    cssCodeSplit: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      // externalize react to avoid bundling it
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", { ignore: "lib/**/*.stories.tsx" }).map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        //dir: 'dist',
        //format: 'es',
        inlineDynamicImports: false,
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYnJhbmRvbi5mbG93ZXJzL2Nyb3NzLWNvdW50cnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9icmFuZG9uLmZsb3dlcnMvY3Jvc3MtY291bnRyeS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYnJhbmRvbi5mbG93ZXJzL2Nyb3NzLWNvdW50cnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBleHRuYW1lLCByZWxhdGl2ZSwgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcImdsb2JcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCBjc3MgZnJvbSBcInJvbGx1cC1wbHVnaW4tY3NzLW9ubHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9cIiksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeVwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2xpYlwiKSxcbiAgICAgIFwiQGhlYWR3aW5kcy9jcm9zcy1jb3VudHJ5L2NvbXBvbmVudHNcIjogcmVzb2x2ZShcbiAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICBcIi4vbGliL2NvbXBvbmVudHNcIlxuICAgICAgKSxcbiAgICAgIFwiQGhlYWR3aW5kcy9jcm9zcy1jb3VudHJ5L2F0b21zXCI6IHJlc29sdmUoXG4gICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgXCIuL2xpYi9jb21wb25lbnRzL2F0b21zXCJcbiAgICAgICksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeS9tb2xlY3VsZXNcIjogcmVzb2x2ZShcbiAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICBcIi4vbGliL2NvbXBvbmVudHMvbW9sZWN1bGVzXCJcbiAgICAgICksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeS9vcmdhbmlzbXNcIjogcmVzb2x2ZShcbiAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICBcIi4vbGliL2NvbXBvbmVudHMvb3JnYW5pc21zXCJcbiAgICAgICksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeS9zZXJ2aWNlc1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2xpYi9zZXJ2aWNlc1wiKSxcbiAgICAgIFwiQGhlYWR3aW5kcy9jcm9zcy1jb3VudHJ5L3Byb3ZpZGVyc1wiOiByZXNvbHZlKFxuICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgIFwiLi9saWIvcHJvdmlkZXJzXCJcbiAgICAgICksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeS9zdHlsZXNcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9saWIvc3R5bGVzXCIpLFxuICAgICAgXCJAaGVhZHdpbmRzL2Nyb3NzLWNvdW50cnkvY29uc3RhbnRzXCI6IHJlc29sdmUoXG4gICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgXCIuL2xpYi9jb25zdGFudHNcIlxuICAgICAgKSxcbiAgICAgIFwiQGhlYWR3aW5kcy9jcm9zcy1jb3VudHJ5L3RlbXBsYXRlc1wiOiByZXNvbHZlKFxuICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgIFwiLi9saWIvdGVtcGxhdGVzXCJcbiAgICAgICksXG4gICAgICBcIkBoZWFkd2luZHMvY3Jvc3MtY291bnRyeS90ZXN0L3NldHVwXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vbGliL3Rlc3RcIiksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIGNzcyh7IG91dHB1dDogXCJidW5kbGUuY3NzXCIgfSksIGR0cyh7IGluY2x1ZGU6IFtcImxpYlwiXSB9KV0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvaW5kZXgudHNcIiksXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLCAvLyBleHRlcm5hbGl6ZSByZWFjdCB0byBhdm9pZCBidW5kbGluZyBpdFxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKFwibGliLyoqLyoue3RzLHRzeH1cIiwgeyBpZ25vcmU6IFwibGliLyoqLyouc3Rvcmllcy50c3hcIiB9KVxuICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcbiAgICAgICAgICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSBwb2ludFxuICAgICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyBuZXN0ZWQvZm9vXG4gICAgICAgICAgICByZWxhdGl2ZShcImxpYlwiLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcbiAgICAgICAgICAgIC8vIFRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBlbnRyeSBmaWxlXG4gICAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIC9wcm9qZWN0L2xpYi9uZXN0ZWQvZm9vLnRzXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy9kaXI6ICdkaXN0JyxcbiAgICAgICAgLy9mb3JtYXQ6ICdlcycsXG4gICAgICAgIGlubGluZUR5bmFtaWNJbXBvcnRzOiBmYWxzZSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixPQUFPLFdBQVc7QUFDaFQsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFDckIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQU5oQixJQUFNLG1DQUFtQztBQUF1SSxJQUFNLDJDQUEyQztBQVFqTyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBLE1BQzVCLDRCQUE0QixRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0RCx1Q0FBdUM7QUFBQSxRQUNyQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxrQ0FBa0M7QUFBQSxRQUNoQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxzQ0FBc0M7QUFBQSxRQUNwQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxzQ0FBc0M7QUFBQSxRQUNwQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxxQ0FBcUMsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN4RSxzQ0FBc0M7QUFBQSxRQUNwQztBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxtQ0FBbUMsUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDcEUsc0NBQXNDO0FBQUEsUUFDcEM7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0Esc0NBQXNDO0FBQUEsUUFDcEM7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsdUNBQXVDLFFBQVEsa0NBQVcsWUFBWTtBQUFBLElBQ3hFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsUUFBUSxhQUFhLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBQSxFQUMzRSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBO0FBQUEsTUFDdkMsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUsscUJBQXFCLEVBQUUsUUFBUSx1QkFBdUIsQ0FBQyxFQUM1RCxJQUFJLENBQUMsU0FBUztBQUFBO0FBQUE7QUFBQSxVQUdiLFNBQVMsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBLFVBR2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sc0JBQXNCO0FBQUEsUUFDdEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
