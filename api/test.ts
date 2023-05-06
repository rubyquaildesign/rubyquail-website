import fs from 'node:fs/promises';
import process from 'node:process';
import path from 'node:path';

async function recursePath(currentPath: string, depth = 0) {
	if fs.d
};

export default async function handler(request, response) {
	const data = await fs.readdir(process.cwd());
	fullPaths = data.map(file => path.join(process.cwd(), file));

	response.status(200).json({
		body: data.join(' , '),
		query: request.query,
		cookies: request.cookies,
	});
}
