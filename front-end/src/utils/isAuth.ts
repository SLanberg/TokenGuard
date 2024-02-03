import axios from 'axios';
import {goto} from "$app/navigation";

const backend = import.meta.env.VITE_APP_MY_BACKEND;

interface CheckUserAuthenticationParams {
	expectedToBeAuthenticated?: boolean,
}

export const checkUserAuthentication = async ({
	expectedToBeAuthenticated,
}: CheckUserAuthenticationParams) => {
	if (expectedToBeAuthenticated) {
		try {
			await axios.get(`${backend}/user`, {withCredentials: true});
		} catch (e) {
			await goto('/', {});
		}
	} else {
		try {
			await axios.get(`${backend}/user`, {withCredentials: true});
			await goto('/secure-access', {});
		} catch (e) {
			/* empty */
		}
	}
}
