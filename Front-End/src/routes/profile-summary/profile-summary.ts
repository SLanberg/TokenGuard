import { goto } from '$app/navigation';

export const handleContinue = async (): Promise<void> => {
    await goto('/menu', {});
}