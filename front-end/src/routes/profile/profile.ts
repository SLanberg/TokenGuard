import { goto } from '$app/navigation';
import { handleLoadEventsLogOut } from '../../stores/profileStore';
import axios from 'axios';

export const logOutRequest = async (): Promise<void> => {
	handleLoadEventsLogOut.update(() => ({
		logOutLoad: true
	}));

	await axios.post(`logout`, {}, { withCredentials: true });

	await goto('/', {});

	handleLoadEventsLogOut.update(() => ({
		logOutLoad: false
	}));
};
