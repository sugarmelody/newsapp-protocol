import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'

export default {
  entry: 'lib/index.js',
  dest: 'dist/newsapp.js', // 输出文件
  format: 'cjs',
  sourceMap: process.env.NODE_ENV === 'production' ? false : 'inline',
  plugins: [
    babel({
      exclude: ['node_modules/**', 'dist/**']
    }),
    eslint({
      exclude: 'node_modules/**'
    })
  ]
};