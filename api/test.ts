import fs from 'node:fs/promises';
import process from 'node:process';
import path from 'node:path';

export default async function handler(request, response) {
	const data = await fs.readdir(process.cwd());
	const fullPaths = data.map(file => path.join(process.cwd(), file));

	response.status(200).json({
		body: JSON.stringify([data.join(', '), fullPaths]),
		query: request.query,
		cookies: request.cookies,
	});
}
