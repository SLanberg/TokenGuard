import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

// Initial values can be set here
const paramsStore = writable({
    telegramId: null,
    password: null,
    token: null,
    createdAt: "",
});

export default paramsStore;

export const handleContinue = async (): Promise<void> => {
    await goto('/menu', {});
}

