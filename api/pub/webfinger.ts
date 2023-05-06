import * as process from 'node:process';
import { type VercelApiHandler } from '@vercel/node';
import * as z from 'zod'; // eslint-disable-line import/no-extraneous-dependencies

const domain = process.env.VERCEL_URL;
const accountTest = z.string().regex(new RegExp(`^acct:\\S{1,64}@${domain}`));

const data = {
	blog: {
		subject: `acct:blog@${domain}`,
		links: [
			{
				rel: 'self',
				type: 'application/activity+json',
				href: `https://${domain}/api/pub/blog/actor`,
			},
		],
	},
	note: {
		subject: `acct:note@${domain}`,
		links: [
			{
				rel: 'self',
				type: 'application/activity+json',
				href: `https://${domain}/api/pub/note`,
			},
		],
	},
};

export const api = (async (request, response) => {
	const resourceString = request.query.resource;
	let account: string;

	try {
		account = accountTest.parse(resourceString);
	} catch (zodError) {
		response.status(400).json(zodError).end();
		return;
	}

	const requestedAccount = /(?<=acct:).+(?=@)/.exec(account)?.[0];
	if (requestedAccount !== 'blog' && requestedAccount !== 'note') {
		response.status(404).end('not found');
	}

	response
		.setHeader('Content-Type', 'application/jrd+json')
		.status(200)
		.json(data[requestedAccount!])
		.end();
}) satisfies VercelApiHandler;

export default api;
