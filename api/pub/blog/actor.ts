import { type VercelApiHandler } from '@vercel/node';
import get from './_actor.get';

export const api = (async (request, response) => {
	switch (request.method) {
		case 'GET': {
			get(response);

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
