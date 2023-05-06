import { type VercelApiHandler } from '@vercel/node';

export const api = (async (request, response) => {
	switch (request.method) {
		case 'GET': {
			response.end(`get request, right?`);
			break;
		}

		case 'POST': {
			response.end(`POST request right`);
			break;
		}

		default: {
			response.end('different response');
			break;
		}
	}
}) satisfies VercelApiHandler;

export default api;
