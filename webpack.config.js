
let path = require('path')
module.exports = {
    mode: 'production',
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist') // 打包后的文件夹
    }
}
