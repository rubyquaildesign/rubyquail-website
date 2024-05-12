import fs from 'node:fs/promises';
import process from 'node:process';
import path from 'node:path';
import { Sha256Signer } from 'activitypub-http-signatures';
import { signAndSend } from './_signature.js';

export default async function handler(request, response) {
	const r = await signAndSend(
		'https://lgbtqia.space/users/ruby/outbox?page=true',
		{
			Accept: 'application/activity+json',
		},
		'GET',
	);
	console.log(r);

	console.log(await r.text());

	const data = await fs.readdir(process.cwd());
	const fullPaths = data.map((file) => path.join(process.cwd(), file));

	response.status(200).json({
		body: JSON.stringify(['', 'a']),
		query: request.query,
		cookies: request.cookies,
	});
}
