import { goto } from '$app/navigation';
import axios from 'axios';
import { fieldsValidationSignIn } from '../stores/loginStore';

export const signInUserRequest = async (event: Event) => {
	// Send API request to the BackEnd
	const formEl = event.target as HTMLFormElement;

	const formData = new FormData(formEl);
	const telegramID = formData.get('Telegram ID');
	const password = formData.get('Password');

	try {
		const { data } = await axios.post(
			`login`,
			{
				telegramID: telegramID,
				password: password
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'true'
				},
				withCredentials: true
			}
		);

		if (data.type === 'success') {
			// If success accept cookie -> redirect
			fieldsValidationSignIn.update(() => ({
				// ...currentValue,
				telegramId: { error: false, message: '' },
				password: { error: false, message: '' } // No error for password
			}));

			return await goto('/casino', {});
		}
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			if (err.response?.data['issueWith'] === 'TelegramID') {
				fieldsValidationSignIn.update((currentValue) => ({
					...currentValue,
					telegramId: { error: true, message: 'Invalid Telegram ID' }
				}));
			}
		} else {
			// Just a stock error
		}
	}
};
