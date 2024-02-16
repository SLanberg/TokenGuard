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
	// Check if the requested URL starts with any of the protected URLs
	if (protectedUrls.some(url => event.url.pathname.startsWith(url))) {
		try {
			// Check user authentication
			await axios.get(`user`, { withCredentials: true });
		} catch (e) {
			// If user is not authenticated, redirect to homepage
			throw redirect(303, "/");
		}
	}

	else if (registrationUrls.some(url => event.url.pathname.startsWith(url))) {
		try {
			// Check user authentication
			await axios.get(`user`, { withCredentials: true });

		} catch (e) {
			// If user is not authenticated pass
		}
		redirect(303, "/casino");
	}

	return await resolve(event);
}
