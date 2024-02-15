import { goto } from '$app/navigation';
import axios from 'axios';

export const logOutRequest = async (): Promise<void> => {
	await axios.post(`logout`, {}, { withCredentials: true });

	await goto('/', {});
};
