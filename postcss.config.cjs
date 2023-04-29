const fontMagician = require('postcss-font-magician');
const presetEnv = require('postcss-preset-env');
// const importCss = require('postcss-import');
const prefixer = require('autoprefixer');
/** @type {import('postcss-load-config').Config} */
const postCSSConfig = {
	plugins: {
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true,
				'color-mix': { preserve: true },
				'prefers-color-scheme-query': true,
				'custom-media-queries': true,
			},
		},
	},
};

module.exports = postCSSConfig;
