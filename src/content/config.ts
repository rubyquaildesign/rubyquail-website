import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
});
const noteCollection = defineCollection({
	schema: z.object({
		date: z.date(),
	}),
});

export const collections = {
	blog: blogCollection,
	note: noteCollection,
};
