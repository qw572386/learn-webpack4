## 初始化项目环境
```
# 新建文件夹learn-webpack4并进入新建src根目录
mkdir learn-webpack4 && cd learn-webpack4 && mkdir src

# 初始化项目
npm init -y

# 安装环境webpack webpack-cli
npm install webpack webpack-cli

```
## webpack 可以0配置
- 打包工具 -> 输出后的结果（js模块）
- 打包（支持js模块化）

## 手动配置webpack
- 默认配置文件的名字webpack.config.js
  - mode 打包模式`devlopment`和`production`
  - entry 入口文件
  - output 出口配置， 可配filename和path
- 配置devServer
  - 安装webpack-dev-server
  - 配置文件中配置devServer
    - port 端口
    - progress 进度条
    - contentBase 指定目录
    - compress 是否压缩
    ...
- 配置html-webpack-plugin
  - 安装html-webpack-plugin
  - 配置文件中配置
    - 引入html-webpack-plugin
    - plugin数组中new一个HtmlWebpackPlugin对象
    - 对象中传入参数
      - template 模版文件
      - filename 文件名
      - minify 最小化配置
        - removeAttributeQuotes 是否移除属性双引号
        - collapseWhitespace 是否折叠空格
      - hash 是否启用哈希