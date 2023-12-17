import react from '@vitejs/plugin-react';
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
//import { libInjectCss } from 'vite-plugin-lib-inject-css'
//import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import css from 'rollup-plugin-css-only';

export default defineConfig({
  plugins: [
    react(),
    css({ output: 'bundle.css' }),
    dts({ include: ['lib'] }),
  ],
  build: {
    cssCodeSplit: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'], // externalize react to avoid bundling it
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}', { ignore: 'lib/**/*.stories.tsx'}).map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        //dir: 'dist',
        //format: 'es',
        inlineDynamicImports: false,
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./lib/setupTests.js'],
    globals: true,
    include: ['./lib/**/*.test.{ts,js,jsx,tsx}'],
  },
});