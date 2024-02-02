import { writable } from "svelte/store";

export const paramsStore = writable({
    telegramId: null,
    password: "",
    token: null,
    createdAt: "",
});

export const handleLoadEventsContinue = writable({
    continueLoad: false,
});