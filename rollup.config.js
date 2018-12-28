import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default [{
  input: 'src/index.js',
  plugins: [filesize()],
  output: {
    file: 'dist/el-spinner.js',
    format: 'umd',
    name: 'ElSpinner'
  }
}, {
  input: 'src/index.js',
  plugins: [terser(), filesize()],
  output: {
    file: 'dist/el-spinner.min.js',
    format: 'umd',
    name: 'ElSpinner'
  }
}]