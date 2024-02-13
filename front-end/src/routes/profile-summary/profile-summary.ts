import { goto } from '$app/navigation';
import toast from 'svelte-french-toast';
import { handleLoadEventsContinue } from '../../stores/profileSummaryStore';

export const copyContentsOfTheFields = () => {
	// const telegramIdInput = document.querySelector('#telegramID') as HTMLInputElement;
	// const passwordInput = document.querySelector('#password') as HTMLInputElement;
	// const tokenInput = document.querySelector('#token') as HTMLInputElement;
	// const createdAtInput = document.querySelector('#createdAt') as HTMLInputElement;

	// 	const inputData = {
	// 		telegramId: telegramIdInput.value,
	// 		password: passwordInput.value,
	// 		token: tokenInput.value,
	// 		createdAt: createdAtInput.value
	// 	};
	//
	// 	navigator.clipboard.writeText(`Telegram id: ${inputData.telegramId}
	// Password: ${inputData.password}
	// Token: ${inputData.token}
	// Created at: ${inputData.createdAt}`);

	toast.success('Copied', {
		position: 'bottom-center',
		style: 'background-color: black; ' + 'color: white;'
	});
};

export const handleContinue = async (): Promise<void> => {
	await goto('/menu', {});
};
