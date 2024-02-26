import axios from 'axios';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const session = cookies.get('session')

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
			user: await user.data
		};
}