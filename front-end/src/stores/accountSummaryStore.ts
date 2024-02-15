import { writable } from 'svelte/store';

export const paramsStore = writable({
	telegramId: '',
	password: '',
	token: '',
	createdAt: ''
});