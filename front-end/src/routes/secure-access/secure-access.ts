import { goto } from "$app/navigation";

const backend = import.meta.env.VITE_APP_MY_BACKEND

import { logOutRequest } from "../profile/profile";
import { handleLoadEventsSecureAccess, secretKeyParam } from "../../state/secure-accessState";
import { popUpStateLogin } from "../../state/loginState";

export const tokenSubmitRequest = async (event: Event): Promise<void> => {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);
    const token = data.get('accessToken')

    handleLoadEventsSecureAccess.update(() => ({
        secretKeyLoad: true
    }));

    const response = await fetch(backend + "/secretkey", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            jwt: document.cookie.replace(/^JWT=/, ''),
        })
    });

    const json = await response.json();

    handleLoadEventsSecureAccess.update(() => ({
        secretKeyLoad: false
    }));

    if (json.secretkey) {
        console.log('I going here')

        secretKeyParam.update(() => ({
            secretKey: json.secretkey,
        }));

        return await goto('/profile',{});
    } else {
        popUpStateLogin.update(() => ({
            showPopUp: true,
        }));

        await logOutRequest()

        return;
    }
}
