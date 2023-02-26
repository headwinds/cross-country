import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
const svgr = require('@svgr/rollup').default;

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.ts';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const PLUGINS = [
  svgr(),
  postcss({
    extract: false,
    modules: true,
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/],
  }),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  filesize(),
  copy({
    targets: [
      {
        src: 'src/index.css',
        dest: 'build',
        rename: 'index.css',
      },
    ],
  }),
];

const EXTERNAL = ['react', 'react-dom', 'prop-types'];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
