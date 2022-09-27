/* eslint-disable n/file-extension-in-import */
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import remarkSectionize from 'remark-sectionize';
import remarkToc from 'remark-toc';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import { tomlConvert } from './tomlPlugin/index.js';

// https://astro.build/config
export default defineConfig({
	site: 'https://rubyquail.design',
	integrations: [svelte(), mdx(), image(), robotsTxt(), sitemap()],
	experimental: {
		integrations: true,
	},
	markdown: {
		remarkPlugins: [
			'remark-gfm',
			'remark-smartypants',
			[
				remarkToc,
				{
					tight: true,
				},
			],
			remarkSectionize,
		],
	},
	vite: {
		plugins: [
			tomlConvert({
				inputFolder: 'src/toml_data',
				outputFolder: 'src/_data',
			}),
		],
		ssr: {
			external: ['svgo'],
			noExternal: ['@fontsource/quicksand', '@fontsource/work-sans'],
		},
	},
});
