const fs = require('fs')
const ts = require('@rollup/plugin-typescript')
module.exports = {
  input: fs.readdirSync('src/scripts').map(p => `src/scripts/${p}`),
  output: {
    dir:'_site/scripts'
  },
  plugins:[ts()]
}