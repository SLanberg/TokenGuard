import axios from 'axios';
import { redirect } from '@sveltejs/kit';

// Protected urls
const protectedUrls = [
	'/account-summary',
	'/secret-key',
	'/secure-access',
	'/casino',
];

// const registrationUrls = [
// 	'/',
// 	'/sign-up',
// ];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	console.log('handle triggered')
	if (protectedUrls.some(url => event.url.pathname.startsWith(url))) {
		console.log('This is where it supposed to be checked if the user authenticated')

		try {
			await axios.get(`user`, { withCredentials: true });
		} catch (e) {
			throw redirect(303, "/");
		}
	}

	return await resolve(event);
}