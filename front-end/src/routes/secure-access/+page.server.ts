import axios from 'axios';
import { fail } from '@sveltejs/kit';

export const actions: import('./$types').Actions = {
	getSecretKey: async ({ request, cookies }) => {
		const formData = await request.formData();
		const token = formData.get('Access Token');
		const session = cookies.get('access_token');

		try {
			const response = await axios.post(
				`secret`,
				{
					token: token,
					session: session
				},
				{
					headers: { 'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'true' },
					// withCredentials: true
				}
			);

			if (response.status === 200) {
				const { data } = response;
				return {
					secretKey: data,
					success: true
				};
			} else {
				return fail(400, {});
			}
		} catch (e) {
			return fail(400, {});
		}
	}
};
