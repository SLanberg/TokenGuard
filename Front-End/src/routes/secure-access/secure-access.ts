import { goto } from "$app/navigation";

export const handleTokenCheckSubmit = async (): Promise<void> => {
    await goto('/profile', {});
}