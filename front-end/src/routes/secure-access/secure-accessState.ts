import {writable} from "svelte/store";

export const handleLoadEventsSecureAccess = writable({
    secretKeyLoad: false,
});