module.exports = { ...require('rubys-xo-settings').prettierSettings, plugins: [require.resolve('prettier-plugin-astro')],
overrides: [
  {
    files: '*.astro',
    options: {
      parser: 'astro',
    },
  },
], };