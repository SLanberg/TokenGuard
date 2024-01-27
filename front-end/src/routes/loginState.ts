import {writable} from "svelte/store";

export const fieldsValidationSignIn = writable({
    telegramId: { error: false, message: "" },
    password: { error: false, message: "" },
});

export const handleLoadEventsSignIn = writable({
    loadingSingInPage: false,
});

export const popUpStateLogin = writable({
    showPopUp: false,
});