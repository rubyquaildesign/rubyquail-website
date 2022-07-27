/* eslint-disable n/file-extension-in-import */
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://astro.build/config
export default defineConfig({
	site: 'https://rubyquail.design',
	integrations: [svelte(), mdx(), image()],
	vite: {
		plugins: [tsconfigPaths()],
	},
});
