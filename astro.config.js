/* eslint-disable n/file-extension-in-import */
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import remarkSectionize from 'remark-sectionize';
import remarkToc from 'remark-toc';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkFigureCaption from '@microflash/remark-figure-caption';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap'; // https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: 'https://rubyquail.design',
	integrations: [svelte(), mdx(), robotsTxt(), sitemap()],
	experimental: {
		integrations: true,
		assets: true,
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
			remarkDirective,
			remarkDirectiveRehype,
			remarkFigureCaption,
		],
	},
	vite: {
		plugins: [],
		ssr: {
			external: ['svgo'],
			noExternal: ['@fontsource/quicksand', '@fontsource/work-sans'],
		},
	},
});
