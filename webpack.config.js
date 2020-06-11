const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 设置 HTML 的标题
      title: 'Webpack Plugin Sample',
      // 尝试为页面添加一个 viewport 设置
      /* meta: {
        viewport: 'width=device-width'
      } */
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      // 默认：index.html
      filename: 'about.html'
    }),
    new CopyWebpackPlugin({
      patterns: ['public'] // 需要拷贝的目录或者路径通配符
    }),
    new RemoveCommentsPlugin()
  ]
}
