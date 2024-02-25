import axios from 'axios';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ request }) {
	const session = request.headers.get('cookie')?.split('session=')[1];

	if (session) {
		const user = await axios.get(
			`http://localhost:8000/api/user`, {
				headers: { 'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'true' },
				data: {
					session: session
				}
			},
		)

		return {
			user: user.data
		};
	}
}