const fs = require('fs')
const ts = require('@rollup/plugin-typescript')
const svelte = require('rollup-plugin-svelte')
module.exports = {
  input: fs.readdirSync('src/scripts').filter(s => s.endsWith('.ts')).map(p => `src/scripts/${p}`),
  output: {
    dir:'_site/scripts'
  },
  plugins:[ts()]
}