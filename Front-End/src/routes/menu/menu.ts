import { goto } from '$app/navigation';
	
export async function handleAvatarClick() {
    // Do some magic here... ✨
    await goto('/token-check', {});
}