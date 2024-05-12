/* eslint-disable n/file-extension-in-import */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap'; // https://astro.build/config
import remarkSectionize from 'remark-sectionize';
import remarkFigureCaption from '@microflash/remark-figure-caption';
import yaml from '@importable/yaml/astro';
import { visit } from 'unist-util-visit';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://rubyquail.design',
	integrations: [mdx(), robotsTxt(), sitemap(), yaml(), svelte()],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			wrap: false,
			theme: 'css-variables',
		},
		remarkPlugins: [
			'remark-gfm',
			'remark-smartypants',
			remarkSectionize,
			remarkFigureCaption,
			() => (t, f) => {
				if (!f?.data?.astro?.frontmatter?.figureCaptions) {
					visit(t, 'figure', (n) => {
						n.children.splice(1);
					});
				}
			},
		],
	},
	image: {
		remotePatterns: [
			{
				protocol: 'https',
			},
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
