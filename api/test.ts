export default function handler(request, response) {
	response.status(200).json({
		body: `Hey`,
		query: request.query,
		cookies: request.cookies,
	});
}
