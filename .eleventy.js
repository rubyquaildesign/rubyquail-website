//@ts-check
const pluginSass = require("eleventy-plugin-sass");
const exec
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster")

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(['pug', 'scss', 'svg'])
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPlugin(pluginSass)
  eleventyConfig.addPlugin(cacheBuster, { outputDirectory: '_site', sourceAttributes: { script: 'src' } })
  eleventyConfig.on('beforeBuild', (changed) => {

  })
  
}