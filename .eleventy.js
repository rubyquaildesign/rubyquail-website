//@ts-check
const pluginSass = require("eleventy-plugin-sass");
const fs = require('fs');
const path = require('path')
const yaml = require('js-yaml');
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
const { exec } = require("child_process");

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(['pug', 'scss', 'svg'])
  eleventyConfig.addDataExtension('yaml', c => yaml.safeLoad(c))
  // eleventyConfig.addPassthroughCopy('scripts/*.js')
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.addWatchTarget('./src/')
  eleventyConfig.on('beforeBuild', (changed) => {
    return new Promise((res) => {
      exec('tsc', () => {
        res();
      });

    })
  })
  return {
    dir: {
    }
  }
}