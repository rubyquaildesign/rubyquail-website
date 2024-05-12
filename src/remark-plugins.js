import remarkSectionize from 'remark-sectionize';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkFigureCaption from '@microflash/remark-figure-caption';
import { visit } from 'unist-util-visit';

export const plugins = [
	'remark-gfm',
	'remark-smartypants',

	remarkSectionize,
	remarkDirective,
	remarkFigureCaption,
	() => (t, f) => {
		if (!f?.data?.astro?.frontmatter?.figureCaptions) {
			visit(t, 'figure', n => {
				n.children.splice(1);
			});
		}
	},
	remarkDirectiveRehype,
];

export default plugins;
