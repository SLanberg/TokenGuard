// import { goto } from "$app/navigation";
import { goto } from "$app/navigation";

const backend = import.meta.env.VITE_APP_MY_BACKEND

import { writable } from "svelte/store";
import {handleLoadEventsSignUp} from "../sign-up/sign-upState";
import {handleLoadEventsSecureAccess} from "./secure-accessState";

export const secretKeyParam = writable({
    secretKey: '',
});


export const tokenSubmitRequest = async (event: Event): Promise<void> => {
    // Send request to the server
    // Check there if the token is correct
    // If it is good! Send to the /profile and add to the state response from the server with the token
    // await goto('/profile', {});
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

    if (json.secretkey) {
        console.log('I going here')

        secretKeyParam.update(() => ({
            secretKey: json.secretkey,
        }));


        return await goto('/profile',{});
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
