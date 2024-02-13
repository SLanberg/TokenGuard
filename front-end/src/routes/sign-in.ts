import { goto } from '$app/navigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { type AxiosError } from 'axios';
import { fieldsValidationSignIn, popUpStateLogin } from '../stores/loginStore';
import { fieldsValidationSignUp } from '../stores/signUpStore';

export const dismissPopUp = async () => {
	popUpStateLogin.update(() => ({
		showPopUp: false
	}));
};

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

			return await goto('/profile', {});
		}
	} catch (err: unknown | AxiosError) {
		if (axios.isAxiosError(err)) {
			if (err.response?.data['issueWith'] === 'TelegramID') {
				fieldsValidationSignUp.update((currentValue) => ({
					...currentValue,
					telegramId: { error: true, message: 'Invalid Telegram ID' }
				}));
			}
		} else {
			// Just a stock error
		}
	}
};
