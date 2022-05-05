const rollup = require('rollup');
const svelte = require('rollup-plugin-svelte');
const path = require('path');
const ts = require('@rollup/plugin-typescript');
const nodeResolve = require('@rollup/plugin-node-resolve');
module.exports = class Scripts {
  data () {
    return {
      permalink: 'svelte.js',
      eleventyExcludeFromCollections: true,
    }
  }

  async render () {
    const build = await rollup.rollup({
      input: path.join(process.cwd(), 'src', 'scripts','svelteScripts', 'hydration.js'),
      plugins: [ts(),
        svelte({
          compilerOptions:{hydratable: true,}
        }),nodeResolve.default({
          browser: true,
          dedupe: ['svelte'],
        }),]
        
    });

    const { output: [ main ] } = await build.generate({
      format: 'iife',
    });
  
    if (main.facadeModuleId) {
      return main.code;
    }
  }
}
