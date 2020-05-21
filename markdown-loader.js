const marked = require('marked')

module.exports = source => {
  const html = marked(source)
  return html
}

/* module.exports = source => {
  const html = marked(source)
  // const code = `module.exports = ${JSON.stringify(html)}`
  const code = `export default ${JSON.stringify(html)}`
  return code
} */


/* module.exports = source => {
  console.log('# Markdown Loader #')
  console.log(source)
  // return `console.log('hello loader ~')`;
  return 'hello loader ~'
} */