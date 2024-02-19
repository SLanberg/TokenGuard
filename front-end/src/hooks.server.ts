import axios from 'axios';
import { redirect } from '@sveltejs/kit';

// Protected urls
const protectedUrls = [
	'/account-summary',
	'/secret-key',
	'/secure-access',
	'/casino',
];

const registrationUrls = [
	'/',
	'/sign-up',
];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (protectedUrls.some(url => event.url.pathname.startsWith(url))) {
		try {
			await axios.get(`user`, { withCredentials: true });
		} catch (e) {
			throw redirect(303, "/");
		}
	}

	return await resolve(event);
}