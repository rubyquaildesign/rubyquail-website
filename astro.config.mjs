/* eslint-disable n/file-extension-in-import */
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import { tomlConvert } from './tomlPlugin/index.js';

console.log(import.meta);
// https://astro.build/config
export default defineConfig({
	site: 'https://rubyquail.design',
	integrations: [svelte(), mdx(), image()],

	vite: {
		plugins: [
			tomlConvert({ inputFolder: 'src/toml_data', outputFolder: 'src/_data' }),
		],
		ssr: {
			// external: ['svgo'],
			noExternal: ['@fontsource/quicksand', '@fontsource/work-sans'],
		},
	},
});
