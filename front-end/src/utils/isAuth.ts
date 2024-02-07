import axios from 'axios';
import { goto } from '$app/navigation';

interface CheckUserAuthenticationParams {
	expectedToBeAuthenticated?: boolean;
}

export const checkUserAuthentication = async ({
	expectedToBeAuthenticated
}: CheckUserAuthenticationParams) => {
	if (expectedToBeAuthenticated) {
		try {
			await axios.get(`user`, { withCredentials: true });
		} catch (e) {
			await goto('/', {});
		}
	} else {
		try {
			await axios.get(`user`, { withCredentials: true });
			await goto('/secure-access', {});
		} catch (e) {
			/* empty */
		}
	}
};
