import axios from 'axios';
import { redirect } from '@sveltejs/kit';

// Protected urls
const protectedUrls = [
	'/account-summary',
	'/secret-key',
	'/secure-access',
	'/casino',
];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (protectedUrls.some(url => event.url.pathname.startsWith(url))) {
		try {
			await axios.get(
				`user`, {
					headers: { 'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'true' },
					data: {
						session: event.cookies.get('session')
					}
				},
				);
		} catch (e) {
			throw redirect(303, "/");
		}
	}

	return await resolve(event);
}
