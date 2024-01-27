import {writable} from "svelte/store";

export const handleLoadEventsSecureAccess = writable({
    secretKeyLoad: false,
});

export const secretKeyParam = writable({
    secretKey: '',
});

export const fieldsValidationSecureAccess = writable({
    invalidToken: { error: false, message: "" },
});
