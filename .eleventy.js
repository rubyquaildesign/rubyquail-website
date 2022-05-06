const fs = require('fs')
const path = require('path')
/** @type any */
const yaml = require('js-yaml')
const sv = require('./shortcodes/svelteShort.cjs')
const rollup = require('rollup');
const svelte = require('rollup-plugin-svelte');
const ts = require('@rollup/plugin-typescript');
const nodeResolve = require('@rollup/plugin-node-resolve');
const sass = require('sass')
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('scss')
  eleventyConfig.addAsyncShortcode('svelte',sv)
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {

      const parsed = path.parse(inputPath)
      let result = sass.compileString(inputContent, {
        loadPaths:[parsed.dir || '.',this.config.dir.includes]
      });
      return async (data) => result.css
    }
  })
  eleventyConfig.addExtension('ts', {
    outputFileExtension:'js',
    compile: async function (content, inputPath) {
      const build = await rollup.rollup({
        input: inputPath,
        external:/\.\//,
        plugins: [ts(),
          ,nodeResolve.default({
            browser: true,
            dedupe: ['svelte'],
          }),]
          
      });
  
      const { output: [ main ] } = await build.generate({
        format: 'esm',
      });
    
      if (main.facadeModuleId) {
        return  async (data) => main.code;
      }
    }
  })
  eleventyConfig.addPassthroughCopy('src/icons')
  eleventyConfig.addPassthroughCopy('../dist/*')
  eleventyConfig.addWatchTarget('*.md')
  eleventyConfig.addDataExtension('yaml', (c) => yaml.safeLoad(c))
  return {
    dir: { input: 'src', output: '_site' },
    templateFormats: ['html', 'pug', 'scss', 'md','11ty.js','ts'],
    markdownTemplateEngine: "njk"
  }
}
