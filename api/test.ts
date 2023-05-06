import fs from 'node:fs/promises';
import process from 'node:process';
import path from 'node:path';

export default async function handler(request, response) {
	const data = await fs.readdir(process.cwd());

	response.status(200).json({
		body: data.join(' , '),
		query: request.query,
		cookies: request.cookies,
	});
}
