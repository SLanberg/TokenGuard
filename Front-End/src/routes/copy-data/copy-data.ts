import { goto } from '$app/navigation';

export async function handleContinue() {
    // Do some magic here... ✨
    await goto('/menu', {});
}