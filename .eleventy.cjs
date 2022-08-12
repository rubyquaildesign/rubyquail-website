const fs = require('fs')
const yaml = require('js-yaml')
const sass = require('sass')
const toml = require('toml');
const cssmin = require('cssmin');
/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */
module.exports = (eleventyConfig) => {
  eleventyConfig.addDataExtension('toml',(data) => toml.parse(data))
  // eleventyConfig.addExtension('scss', {
  //   outputFileExtension: 'css',
  //   compile: async function (inputContent) {

  //     let result = sass.compileString(inputContent);
  //     return async (data) => result.css
  //   }
  // })
  eleventyConfig.addPassthroughCopy('src/icons')
  eleventyConfig.addPassthroughCopy('../dist/*')
  eleventyConfig.addNunjucksFilter('cssmin', (css) => cssmin(css))
  eleventyConfig.addDataExtension('yaml', (c) => yaml.safeLoad(c))
  return {
    dir: { input: 'src', output: '_site' },
    templateFormats: ['html', 'scss', 'md','11ty.js','njk'],
    markdownTemplateEngine: "njk"
  }
}
