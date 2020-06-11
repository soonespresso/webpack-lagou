module.exports = class RemoveCommentsPlugin {

  apply(compiler) {
    // compiler 包含此次构建的所有配置信息
    console.log('RemoveCommentsPlugin start.');
    
    // 注册钩子函数
    compiler.hooks.emit.tap(
      'RemoveCommentsPlugin',
      // compilation：此次打包的上下文
      compilation => {
        for (const name in compilation.assets) {
          // 输出文件名称
          // console.log(name);
          // 资源文件内容
          // console.log(compilation.assets[name].source());
          if (name.endsWith('.js')) {
            const contents = compilation.assets[name].source();
            const noComments = contents.replace(/\/\*{2,}\/\s?/g, '');
            compilation.assets[name] = {
              source: () => noComments,
              size: () => noComments.length
            }
          }
        }
      }
    )
  }
}