//@ts-check
const fs = require('fs')
const path = require('path')
/** @type any */
const yaml = require('js-yaml')


const sass = require('sass')
module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('scss')
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {

      const parsed = path.parse(inputPath)
      let result = sass.compileString(inputContent, {
        loadPaths:[parsed.dir ?? '.',this.config.dir.includes]
      });
      return async (data) => result.css
    }
  })
  eleventyConfig.addPassthroughCopy('src/icons')
  eleventyConfig.addPassthroughCopy('../dist/*')
  eleventyConfig.addDataExtension('yaml', (c) => yaml.safeLoad(c))
  return {
    dir: { input: 'src', output: '_site' },
    templateFormats: ['html', 'pug', 'scss']
  }
}
