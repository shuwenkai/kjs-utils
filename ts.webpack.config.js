const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // 扩展名
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  // 添加source-map
  // devtool: 'source-map',
  // 入口文件
  entry: {
    index: './src/index.ts',
  },
  // 打包出来的文件
  output: {
    filename: '[name].js',// 生成的fiename需要与package.json中的main一致
    path: path.resolve(__dirname, 'dist'),     
   // 打包后在哪个全局对象访问
    library: 'kjsUtils',
    libraryTarget: 'umd',
  },
  // loader
  module: {
    rules: [
      // 对ts/tsx文件使用tsconfig.json
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  // plugins
  plugins: [new CleanWebpackPlugin()],
}