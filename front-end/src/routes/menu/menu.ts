import { goto } from '$app/navigation';
import {handleLoadEventsProfilePage} from "../../stores/menuStore";

export const handleAvatarClick = async () => {
    handleLoadEventsProfilePage.update(() => ({
        loadProfilePage: true
    }));

    await goto('/secure-access', {});

    handleLoadEventsProfilePage.update(() => ({
        loadProfilePage: false
    }));
}