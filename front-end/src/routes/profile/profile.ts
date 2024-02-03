import { goto } from "$app/navigation";
import { handleLoadEventsLogOut } from "../../stores/profileState";
import {authenticatedStore} from "../../stores/authenticatedStore";

export const logOutRequest = async (): Promise<void> => {
    document.cookie =  document.cookie +"; expires=" + "Thu, 01 Jan 1970 00:00:00 UTC"

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: true,
    }));

    authenticatedStore.set(false)

    await goto('/', {});

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: false,
    }));
}


