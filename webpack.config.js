module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
      /* {
        test: /\.css$/,
        // 对同一个模块使用多个 loader，注意顺序
        use: [
          'style-loader',
          'css-loader'
        ]
      } */
    ]
  }
}
