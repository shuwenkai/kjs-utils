const path = require('path')
module.exports = {
    // 模式
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出文件夹
        path: path.resolve(__dirname, 'dist'),
        // 输出文件
        filename: 'index.js',
        // 打包后在哪个全局对象访问
        library: 'kjsUtils',
        libraryTarget: 'umd'
    }
}