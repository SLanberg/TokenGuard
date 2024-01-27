import { goto } from "$app/navigation";

const backend = import.meta.env.VITE_APP_MY_BACKEND

import {handleLoadEventsSecureAccess, secretKeyParam} from "./secure-accessState";
import {logOutRequest} from "../profile/profile";

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



        await logOutRequest()

        return;
    }

    // await fetch(import.meta.env.APP_MY_BACKEND + "/auth/logout", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })

    // If the token is incorrect, log out user, send him to the home page and set state for the pop up true at the home
    // page
}
