/** @type {import('eslint').Linter.Config} */
const config = {
	root: true,
	extends: [
		'standard-with-typescript',
		'plugin:svelte/prettier',
		'plugin:astro/recommended',
		'prettier',
	],
	parserOptions: { project: './tsconfig.json' },
	plugins: ['@typescript-eslint', 'prettier'],
	ignorePatterns: ['node_modules'],
	rules: {},
};

module.exports = config;
