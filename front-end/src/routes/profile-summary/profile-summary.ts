import toast from 'svelte-french-toast';

export const copyContentsOfTheFields = () => {
	const telegramIdInput = document.querySelector('#telegramID') as HTMLInputElement;
	const passwordInput = document.querySelector('#password') as HTMLInputElement;
	const tokenInput = document.querySelector('#token') as HTMLInputElement;
	const createdAtInput = document.querySelector('#createdAt') as HTMLInputElement;

		const inputData = {
			telegramId: telegramIdInput.value,
			password: passwordInput.value,
			token: tokenInput.value,
			createdAt: createdAtInput.value
		};

	navigator.clipboard.writeText(`Telegram id: ${inputData.telegramId}
	Password: ${inputData.password}
	Token: ${inputData.token}
	Created at: ${inputData.createdAt}`)
		.then(() => {
			toast.success('Copied', {
				position: 'bottom-center',
				style: 'background-color: black; ' + 'color: white;'
			});
		})
		.catch((error) => {
			toast.error(error + " Manually save values to the notepad.", {
				position: 'bottom-center',
				style: 'background-color: black; ' + 'color: white;'
			});

		});
};