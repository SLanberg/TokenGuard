import { goto } from "$app/navigation";

export async function handleTokenCheckSubmit() {
    // Do some magic here... ✨
    await goto('/profile', {});
}