import { goto } from '$app/navigation';
import { writable } from 'svelte/store';
import toast from "svelte-french-toast";

// Initial values can be set here
const paramsStore = writable({
    telegramId: null,
    password: null,
    token: null,
    createdAt: "",
});

export default paramsStore;

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
    }

    navigator.clipboard.writeText(`Telegram id: ${inputData.telegramId} 
Password: ${inputData.password} 
Token: ${inputData.token} 
Created at: ${inputData.createdAt}`)

    toast.success('Copied', {
        position: "bottom-center",
        style: "background-color: black; color: white;"
    })
}

export const handleContinue = async (): Promise<void> => {
    await goto('/menu', {});
}


