import {goto} from '$app/navigation';
import {
	fieldsValidationSignIn,
	handleLoadEventsSignIn,
	popUpStateLogin
} from '../stores/loginStore';
import axios from "axios";

export const handleSignUpClick = async () => {
	await goto('/sign-up', {});
};

export const dismissPopUp = async () => {
	popUpStateLogin.update(() => ({
		showPopUp: false
	}));
};

export const signInUserRequest = async (event: Event) => {
	// Send API request to the BackEnd
	const formEl = event.target as HTMLFormElement;
	const formData = new FormData(formEl);

	const telegramID = formData.get('telegramID');
	const password = formData.get('password');


	handleLoadEventsSignIn.update(() => ({
		loadingSingInPage: true
	}));


	const { data } = await axios.post(
		`login`,
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

	console.log(data)

	if (data.type === 'success') {
		// If success accept cookie -> redirect
		fieldsValidationSignIn.update(() => ({
			// ...currentValue,
			telegramId: {error: false, message: ''},
			password: {error: false, message: ''} // No error for password
		}));

		handleLoadEventsSignIn.update(() => ({
			loadingSingInPage: false
		}));

		return await goto('/menu', {});
	} else {
		// Example of updating the store
		fieldsValidationSignIn.update(() => ({
			telegramId: {error: true, message: 'Invalid Telegram ID'},
			password: {error: false, message: ''} // No error for password
		}));

		handleLoadEventsSignIn.update(() => ({
			loadingSingInPage: false
		}));
	}
};
