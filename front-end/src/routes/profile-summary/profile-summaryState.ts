import {writable} from "svelte/store";

export const paramsStore = writable({
    telegramId: null,
    password: null,
    token: null,
    createdAt: "",
});

