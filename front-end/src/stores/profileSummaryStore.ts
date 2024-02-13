import { writable } from 'svelte/store';

export const paramsStore = writable({
	telegramId: '',
	password: '',
	token: '',
	createdAt: ''
});

export const handleLoadEventsContinue = writable({
	continueLoad: false
});
