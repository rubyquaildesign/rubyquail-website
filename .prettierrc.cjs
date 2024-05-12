/** @type {import('prettier').Config} */
const config = {
  semi: true,
  trailingComma: 'all',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-astro'],
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  svelteBracketNewLine: true,
  svelteIndentScriptAndStyle: true,
  bracketSameLine: false,
  bracketSpacing: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

module.exports = config;
