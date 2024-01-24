import { goto } from "$app/navigation";

export const handleProfileContinue = async (): Promise<void> => {
    await goto('/', {});
}