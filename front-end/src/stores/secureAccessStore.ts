import { writable } from 'svelte/store';

export const secretKeyParam = writable({
	secretKey: ''
});
