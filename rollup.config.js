const resolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');
const scss = require('rollup-plugin-scss');
const { terser } = require('rollup-plugin-terser');

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/v-inline-editor.esm.js',
      name: 'VueInlineEditor',
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: 'lib/v-inline-editor.cjs.js',
      name: 'VueInlineEditor',
      format: 'cjs',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: 'lib/v-inline-editor.umd.js',
      name: 'VueInlineEditor',
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  external: [ 'vue' ],
  plugins: [
    resolve({
      extensions: ['.js', '.css', '.scss', '.vue']
    }),
    commonjs(),
    vue({
      compileTemplate: true,
      css: false
    }),
    scss({
      output: 'lib/v-inline-editor.css'
    }),
    buble(),
    terser()
  ]
};
