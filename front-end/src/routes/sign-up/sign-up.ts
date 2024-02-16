import { goto } from '$app/navigation';
import { fieldsValidationSignUp } from '../../stores/signUpStore';
import { paramsStore } from '../../stores/accountSummaryStore';
import axios, { type AxiosError } from 'axios';

export const userRegistrationRequest = async (event: Event) => {
	const formEl = event.target as HTMLFormElement;
	const formData = new FormData(formEl);

	const telegramID = formData.get('Telegram ID');
	const password: string = formData.get('Password')!.toString();
	const confirmPassword = formData.get('Confirm password');

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
					'Access-Control-Allow-Origin': 'true' // or specific origin, adjust as needed
				},
				withCredentials: true
			}
		);

		fieldsValidationSignUp.update(() => ({
			telegramId: { error: false, message: '' },
			password: { error: false, message: '' },
			confirmPassword: { error: false, message: '' }
		}));

		if (data.type === 'success') {
			// Log the 'user' property
			paramsStore.update((store) => {
				store.telegramId = data.user['telegram_id'];
				store.password = password;
				store.token = data.securityToken['security_token'];
				store.createdAt = data.user['created_at'];

				return store;
			});

			await goto('/account-summary', {});
		}
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			const axiosError = err as AxiosError;
			const responseData = axiosError.response?.data as { issueWith?: string, message?: string };
			if (responseData.issueWith === 'TelegramID') {
				fieldsValidationSignUp.update((currentValue) => ({
					...currentValue,
					telegramId: {
						error: true,
						message: responseData.message || 'An error occurred'
					}
				}));
			} else if (responseData.issueWith === 'Password') {
				fieldsValidationSignUp.update((currentValue) => ({
					...currentValue,
					password: {
						error: true,
						message: responseData.message || 'An error occurred',
					}
				}));
			} else if (responseData.issueWith === 'Confirm password') {
				fieldsValidationSignUp.update((currentValue) => ({
					...currentValue,
					confirmPassword: {
						error: true,
						message: responseData.message || 'An error occurred',
					}
				}));
			}
		} else {
			// Stock error
			// TODO: Here I want to see error to be stored and sent to me for the further investigation.
			// Something with email would be good to have.
		}
	}
};
