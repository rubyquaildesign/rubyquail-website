import { type VercelResponse } from '@vercel/node';
import { type APActor } from 'activitypub-types';

export default function get(resp: VercelResponse) {
	resp.statusCode = 200;
	const actor: APActor = {
		'@context': ['https://www.w3.org/ns/activitystreams'],
		type: 'person',
		id: `https://${import.meta.env.VERCEL_URL}/api/actor`,
		outbox: `https://${import.meta.env.VERCEL_URL}/api/outbox`,
		inbox: `https://${import.meta.env.VERCEL_URL}/api/outbox`,
	};
}
