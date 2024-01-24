import { goto } from '$app/navigation';

export const handleAvatarClick = async () => {
    await goto('/secure-access', {});
}