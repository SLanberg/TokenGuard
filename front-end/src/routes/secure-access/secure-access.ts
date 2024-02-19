import { secretKeyParam } from '../../stores/secureAccessStore';
import axios from 'axios';
import { goto } from '$app/navigation';
import { popUpStateLogin } from '../../stores/loginStore';
import { logOutRequest } from '../casino/casino';

export const tokenSubmitRequest = async (event: Event): Promise<void> => {
	const formEl = event.target as HTMLFormElement;
	const formData = new FormData(formEl);
	const token = formData.get('Access Token');

	try {
		const response = await axios.post(
			`secret`,
			{
				token: token
			},
			{ withCredentials: true }
		);

		if (response.status === 200) {
			const { data } = response;
			secretKeyParam.update(() => ({
				secretKey: data
			}));
			return await goto('/secret-key', {});
		} else {
			popUpStateLogin.update(() => ({
				showPopUp: true
			}));

			await logOutRequest();

			return await goto('/', {});
		}
	} catch (e) {
		// Handle error
		popUpStateLogin.update(() => ({
			showPopUp: true
		}));

		await logOutRequest();

		return await goto('/', {});
	}
};
