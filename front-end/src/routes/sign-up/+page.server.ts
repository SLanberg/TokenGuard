import axios, { type AxiosError } from 'axios';
import { fail } from '@sveltejs/kit';

export const actions: import('./$types').Actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const telegramID = formData.get('Telegram ID') as string;
		const password = formData.get('Password') as string;
		const confirmPassword = formData.get('Confirm password') as string;

		// Currently telegramID can be anything but what can be used to ensure it is legit telegramID?
		// 1. API call to the Telegram API (Probability it is not presented)
		// 2. Creation of the Telegram bot that writes to the TelegramID unique code that user should enter
		try {
			const { data } = await axios.post(
				`register`,
				{
					telegramID: telegramID,
					password: password,
					confirmPassword: confirmPassword
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'true'
					},
				}
			);

			return {
				telegramID: telegramID,
				password: password,
				token: data.securityToken['security_token'],
				createdAt: data.user['created_at'],
				success: true
			};
		} catch (err) {
			if (axios.isAxiosError(err)) {
				const axiosError = err as AxiosError;
				const responseData = axiosError.response?.data as { issueWith?: string; message?: string };

				// Here you can add errors to the list or a dictionary and then show to the user
				// them together. For now I will leave as it is right now because I want to make redesign
				// of the website.
				if (responseData.issueWith === 'TelegramID') {
					return fail(400, {
						issueWith: 'TelegramID',
						message: responseData.message
					});
				} else if (responseData.issueWith === 'Password') {
					return fail(400, {
						issueWith: 'Password',
						message: responseData.message
					});
				} else if (responseData.issueWith === 'Confirm password') {
					return fail(400, {
						issueWith: 'Confirm password',
						message: responseData.message
					});
				}
			} else {
				return err;
			}
		}
	}
};
