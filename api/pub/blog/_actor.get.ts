import * as process from 'node:process';
import { type VercelResponse } from '@vercel/node';
import { type APActor } from 'activitypub-types';

const domain = process.env.VERCEL_URL;
export default function get(resp: VercelResponse) {
	resp.statusCode = 200;
	const actor = {
		'@context': ['https://www.w3.org/ns/activitystreams'],
		type: 'Person',
		id: `https://${domain}/api/blog/actor`,
		outbox: `https://${domain}/api/blog/outbox`,
		inbox: `https://${domain}/api/blog/inbox`,
		preferredUsername: 'blog',
		name: "Ruby Quail's Blog",
		summary: '',
		publicKey: {
			'@context': 'https://w3id.org/security/v1',
			'@type': 'Key',
			id: `https://${domain}/api/blog/actor#main-key`,
			owner: `https://${domain}/api/blog/actor`,
			publicKeyPem: process.env.APUB_Public,
		},
	} satisfies APActor & { publicKey: any };
	resp
		.setHeader('Content-Type', 'application/activity+json')
		.status(200)
		.json(actor)
		.end();
}
