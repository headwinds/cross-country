// vite.config.ts
import react from "file:///Users/brandonflowers/cross-country/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///Users/brandonflowers/cross-country/node_modules/glob/dist/esm/index.js";
import { defineConfig } from "file:///Users/brandonflowers/cross-country/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/brandonflowers/cross-country/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/brandonflowers/cross-country/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/brandonflowers/cross-country";
var __vite_injected_original_import_meta_url = "file:///Users/brandonflowers/cross-country/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"] })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      name: "cross-country",
      formats: ["es", "umd"],
      fileName: (format) => `cross-country.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      // externalize react to avoid bundling it
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", { ignore: "lib/**/*.stories.tsx" }).map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            "lib",
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./lib/setupTests.js"],
    globals: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYnJhbmRvbmZsb3dlcnMvY3Jvc3MtY291bnRyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JyYW5kb25mbG93ZXJzL2Nyb3NzLWNvdW50cnkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JyYW5kb25mbG93ZXJzL2Nyb3NzLWNvdW50cnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBsaWJJbmplY3RDc3MoKSxcbiAgICBkdHMoeyBpbmNsdWRlOiBbJ2xpYiddIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnbGliL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnY3Jvc3MtY291bnRyeScsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBjcm9zcy1jb3VudHJ5LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC9qc3gtcnVudGltZSddLCAvLyBleHRlcm5hbGl6ZSByZWFjdCB0byBhdm9pZCBidW5kbGluZyBpdFxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYi5zeW5jKCdsaWIvKiovKi57dHMsdHN4fScsIHsgaWdub3JlOiAnbGliLyoqLyouc3Rvcmllcy50c3gnfSkubWFwKGZpbGUgPT4gW1xuICAgICAgICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSBwb2ludFxuICAgICAgICAgIC8vIGxpYi9uZXN0ZWQvZm9vLnRzIGJlY29tZXMgbmVzdGVkL2Zvb1xuICAgICAgICAgIHJlbGF0aXZlKFxuICAgICAgICAgICAgJ2xpYicsXG4gICAgICAgICAgICBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpXG4gICAgICAgICAgKSxcbiAgICAgICAgICAvLyBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgZW50cnkgZmlsZVxuICAgICAgICAgIC8vIGxpYi9uZXN0ZWQvZm9vLnRzIGJlY29tZXMgL3Byb2plY3QvbGliL25lc3RlZC9mb28udHNcbiAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV1bZXh0bmFtZV0nLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuL2xpYi9zZXR1cFRlc3RzLmpzJ10sXG4gICAgZ2xvYmFsczogdHJ1ZVxuICB9LFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUixPQUFPLFdBQVc7QUFDN1MsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFDckIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBTjdCLElBQU0sbUNBQW1DO0FBQXFJLElBQU0sMkNBQTJDO0FBUS9OLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsaUJBQWlCLE1BQU07QUFBQSxJQUMvQztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsbUJBQW1CO0FBQUE7QUFBQSxNQUN2QyxPQUFPLE9BQU87QUFBQSxRQUNaLEtBQUssS0FBSyxxQkFBcUIsRUFBRSxRQUFRLHVCQUFzQixDQUFDLEVBQUUsSUFBSSxVQUFRO0FBQUE7QUFBQTtBQUFBLFVBRzVFO0FBQUEsWUFDRTtBQUFBLFlBQ0EsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxVQUNsRDtBQUFBO0FBQUE7QUFBQSxVQUdBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsSUFDbEMsU0FBUztBQUFBLEVBQ1g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
