import babel from 'rollup-plugin-babel'
//import eslint from 'rollup-plugin-eslint'

export default {
  entry: 'lib/index.js',
  dest: 'dist/newsapp.js', // 输出文件
  targets: [
    {
      //format: 'iife',
      format: 'umd',
      moduleName: 'newsappAPI',
      //sourceMap: process.env.NODE_ENV === 'production' ? false : 'inline',
      sourceMap: false,
    }
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**', 'dist/**']
    }),
    /*eslint({
      exclude: 'node_modules/!**'
    })*/
  ]
};