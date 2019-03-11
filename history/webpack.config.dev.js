
let path = require('path')
module.exports = {
    modle: 'devlopment',
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist') // 打包后的文件夹
    }
}