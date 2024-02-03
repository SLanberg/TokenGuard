import { writable } from 'svelte/store';

export const fieldsValidationSignUp = writable({
	telegramId: { error: false, message: '' },
	password: { error: false, message: '' },
	confirmPassword: { error: false, message: '' }
});

export const handleLoadEventsSignUp = writable({
	loadingSingUpPage: false
});
