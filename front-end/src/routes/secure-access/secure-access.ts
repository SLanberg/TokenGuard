import { secretKeyParam } from '../../stores/secureAccessStore';

import axios from 'axios';
import { goto } from '$app/navigation';
import { popUpStateLogin } from '../../stores/loginStore';
import { logOutRequest } from '../profile/profile';

export const tokenSubmitRequest = async (event: Event): Promise<void> => {
	const formEl = event.target as HTMLFormElement;
	const formData = new FormData(formEl);
	const token = formData.get('Access Token');

	try {
		const { data } = await axios.post(
			`secret`,
			{
				token: token
			},
			{ withCredentials: true }
		);

		secretKeyParam.update(() => ({
			secretKey: data
		}));

		return await goto('/secret-key', {});
	} catch (e) {
		popUpStateLogin.update(() => ({
			showPopUp: true
		}));

		await logOutRequest();

		return await goto('/', {});
	}
};
