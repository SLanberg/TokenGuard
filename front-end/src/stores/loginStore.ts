import { writable } from 'svelte/store';

export const loginPopUpStore = writable({
	showPopUp: false
});

export const isAuth = writable({
	isAuth: false
});