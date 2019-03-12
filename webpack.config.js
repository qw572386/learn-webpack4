
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    devServer: { // 开发服务器配置
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.[hash].js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist') // 打包后的文件夹
    },
    plugin: [ // 存放所有webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        })
    ]
}
