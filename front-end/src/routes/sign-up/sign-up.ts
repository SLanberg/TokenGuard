import {goto} from '$app/navigation';
import {fieldsValidationSignUp, handleLoadEventsSignUp} from '../../stores/signUpStore';
import {paramsStore} from '../../stores/profileSummaryStore';
import axios, {type AxiosError} from "axios";
import {fieldsValidationSignIn} from "../../stores/loginStore";
// import {fieldsValidationSignIn} from "../../stores/loginStore";

export const userRegistrationRequest = async (event: Event) => {
	const formEl = event.target as HTMLFormElement;
	const formData = new FormData(formEl);

	const telegramID = formData.get('telegramID');
	const password: string = formData.get('password')!.toString();
	const confirmPassword = formData.get('confirmPassword');

	if (password !== confirmPassword) {
		fieldsValidationSignUp.update((currentValue) => ({
			...currentValue,
			confirmPassword: { error: true, message: "Passwords don't match" }
		}));

		return;
	}

	fieldsValidationSignUp.update(() => ({
		telegramId: { error: false, message: '' },
		password: { error: false, message: '' },
		confirmPassword: { error: false, message: '' }
	}));

	handleLoadEventsSignUp.update(() => ({
		loadingSingUpPage: true
	}));

	// Currently telegramID can be anything but what can be used to ensure it is legit telegramID?
	// 1. API call to the Telegram API (Probability it is not presented)
	// 2. Creation of the Telegram bot that writes to the TelegramID unique code that user should enter
	try {
		const {data} = await axios.post(
			`register`,
			{
				telegramID: telegramID,
				password: password
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'true' // or specific origin, adjust as needed
				},
				withCredentials: true
			}
		);

		if (data.type === 'success') {
			// Log the 'user' property
			console.log(data.user);

			paramsStore.update((store) => {
				store.telegramId = data.user['telegram_id'];
				store.password = password;
				store.token = data.securityToken['security_token'];
				store.createdAt = data.user['created_at'];

				return store;
			});

			await goto('/profile-summary', {});
		}

	} catch (err: unknown | AxiosError) {
		if (axios.isAxiosError(err)) {
			if (err.response?.data['issueWith'] === "TelegramID") {
				console.log('hi')

				fieldsValidationSignUp.update((currentValue) => ({
					...currentValue,
					telegramId: {
						error: true,
						message: 'TelegramID already in use'
					},
				}));
			}
		} else {
			// Stock error
		}

		handleLoadEventsSignUp.update(() => ({
			loadingSingUpPage: false
		}));
	}





};
