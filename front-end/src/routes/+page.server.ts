import axios, { type AxiosError } from 'axios';
import { fail } from '@sveltejs/kit';

export const actions: import('./$types').Actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const telegramID = formData.get('Telegram ID');
		const password = formData.get('Password');

		try {
			const { data } = await axios.post(
				`login`,
				{ telegramID: telegramID, password: password },
				{
					headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true' },
				}
			);

			if (data.type === 'success') {
				cookies.set('session', data.accessToken, {
					maxAge: 24 * 60 * 60 * 1000, // 1 day
					sameSite: 'strict',
					path: '/'
				});

				return {
					success: true,
				};
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				const axiosError = err as AxiosError;
				const responseData = axiosError.response?.data as {
					issueWith?: string; message?: string
				};

				if (responseData.issueWith === 'TelegramID') {
					return fail(400, {
						issueWith: 'TelegramID',
						message: 'Invalid Telegram ID or password'
					});
				} else {
					return err;
				}
			}
		}
	}
};
