import { goto } from "$app/navigation";

const backend = import.meta.env.VITE_APP_MY_BACKEND

import {logOutRequest} from "../profile/profile";
import {handleLoadEventsSecureAccess, secretKeyParam} from "../../state/secure-accessState";
import {popUpStateLogin} from "../../state/loginState";
import {authenticatedState} from "../../state/authenticatedState";

export const tokenSubmitRequest = async (event: Event): Promise<void> => {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);
    const token = data.get('accessToken');

    handleLoadEventsSecureAccess.update(() => ({
        secretKeyLoad: true
    }));

    console.log('---')
    console.log(document.cookie)
    console.log('---')

    const response = await fetch(backend + "/secret", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            credentials: 'include',
            // jwt: document.cookie.replace(/^JWT=/, ''),
        })
    });

    const json = await response.json();

    console.log(response)

    if (json.secretkey) {
        secretKeyParam.update(() => ({
            secretKey: json.secretkey,
        }));

        handleLoadEventsSecureAccess.update(() => ({
            secretKeyLoad: false
        }));

        return await goto('/profile',{});
    } else {
        authenticatedState.set(false)

        popUpStateLogin.update(() => ({
            showPopUp: true,
        }));

        await logOutRequest()

        return;
    }
}
