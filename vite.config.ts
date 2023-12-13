import react from '@vitejs/plugin-react';
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'cross-country',
      formats: ['es'],
      fileName: (format) => `cross-country.${format}.js`,
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
        dir: 'dist',
        format: 'es',
        inlineDynamicImports: false,
      }
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./lib/setupTests.js'],
    globals: true
  },
});