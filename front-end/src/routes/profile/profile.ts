import { goto } from "$app/navigation";
import { popUpStateLogin } from "../loginState";
import { handleLoadEventsLogOut } from "./profileState";

export const logOutRequest = async (): Promise<void> => {
    document.cookie =  document.cookie +"; expires=" + "Thu, 01 Jan 1970 00:00:00 UTC"

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: true,
    }));

    popUpStateLogin.update(() => ({
        showPopUp: true,
    }));

    await goto('/', {});

    handleLoadEventsLogOut.update(() => ({
        logOutLoad: false,
    }));
}


