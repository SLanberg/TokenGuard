import { goto } from "$app/navigation";
import { handleLoadEventsLogOut } from "../../state/profileState";
import {authenticatedState} from "../../state/authenticatedState";

export const logOutRequest = async (): Promise<void> => {
    document.cookie =  document.cookie +"; expires=" + "Thu, 01 Jan 1970 00:00:00 UTC"

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: true,
    }));

    authenticatedState.set(false)

    await goto('/', {});

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: false,
    }));
}


