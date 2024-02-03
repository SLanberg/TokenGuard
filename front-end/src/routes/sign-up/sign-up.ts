import {goto} from '$app/navigation';
import {fieldsValidationSignUp, handleLoadEventsSignUp} from '../../stores/signUpStore';
import {paramsStore} from '../../stores/profileSummaryStore';

const backend = import.meta.env.VITE_APP_MY_BACKEND;

export const userRegistrationRequest = async (event: Event) => {
	const formEl = event.target as HTMLFormElement;
	const data = new FormData(formEl);

	const telegramID = data.get('telegramID');
	const password: string = data.get('password')!.toString();
	const confirmPassword = data.get('confirmPassword');

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
	const response = await fetch(backend + '/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'true'
		},
		body: JSON.stringify({
			telegramID: telegramID,
			password: password
		})
	});
	const json = await response.json();

	handleLoadEventsSignUp.update(() => ({
		loadingSingUpPage: false
	}));

	const { type, user, message, issueWith, securityToken } = json;
	if (type === 'success') {
		// document.cookie = `JWT=${json.jwt}; path=/;`;

		// Log the 'user' property
		console.log(user);

		paramsStore.update((store) => {
			store.telegramId = user['telegram_id'];
			store.password = password;
			store.token = securityToken['security_token'];
			store.createdAt = user['created_at'];

			return store;
		});

		await goto('/profile-summary', {});
	} else {
		if (issueWith === 'TelegramID') {
			fieldsValidationSignUp.update((currentValue) => ({
				...currentValue,
				telegramId: { error: true, message: message }
			}));
		}
	}
};
