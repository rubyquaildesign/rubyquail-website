import * as path from 'path';
import rss from '@astrojs/rss';
import { getImage } from 'astro:assets';
import { micromark } from 'micromark';
import sanitizeHtml from 'sanitize-html';
import { type CollectionEntry, getCollection } from 'astro:content';
export async function get(context) {
	const blog = await getCollection('blog');
	const transformedContent: Array<CollectionEntry<'blog'>> = [];
	for (const b of blog) {
		let rawHTML = micromark(b.body);
		const matches = rawHTML.matchAll(/src="([^"]+assets[^"]+)"/g);
		for (const match of matches) {
			const baseUrl = match[1];
			const resultUrl = path.join('/src/content/blog/', baseUrl);
			const awaitImg = await import(resultUrl /* @vite-ignore */);
			console.log(awaitImg);

			const output = await getImage({
				src: awaitImg.default.src,
				height: awaitImg.default.height,
				width: awaitImg.default.width,
			});
			rawHTML = rawHTML.replace(baseUrl, output.src);
		}

		transformedContent.push({ ...b, body: rawHTML });
	}

	return await rss({
		title: `Ruby Quail's blog`,
		description: `Ruby Quail's blog`,
		site: context.site,
		items: transformedContent.map((bp) => ({
			link: `/blog/${bp.slug}`,
			content: sanitizeHtml(bp.body, {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
			pubDate: bp.data.date,
			title: bp.data.title,
			author: 'Ruby Quail',
			categories: bp.data.tags,
			description: bp.data.desc,
		})),
	});
}
