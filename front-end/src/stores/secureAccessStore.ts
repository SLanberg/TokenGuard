import { writable } from 'svelte/store';

export const secretKeyStore = writable({
	secretKey: '',
	createdAt: '',
});
