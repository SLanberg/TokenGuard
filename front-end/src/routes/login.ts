import { goto } from "$app/navigation";
import {writable} from "svelte/store";

export const handleSignUpClick = async () => {
    await goto('/sign-up', {});
}

export const fieldsValidationSignIn = writable({
    telegramId: { error: false, message: "" },
    password: { error: false, message: "" },
});


export const signInUserRequest = async (event: Event) => {
    // Send API request to the BackEnd
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const telegramID = data.get('telegramID')
    const password = data.get('password')

    const response = await fetch(import.meta.env.VITE_APP_MY_BACKEND + "/auth/sign-in", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            telegramID: telegramID,
            password: password,
        })
    });

    const json = await response.json();
    if (json.type === "success") {
        document.cookie = `JWT=${json.jwt}; path=/;`;
        // If success accept cookie -> redirect
        return await goto('/menu',{});
    } else {
        // Example of updating the store
        // fieldValid.update(() => ({
        //     // ...currentValue,
        //     telegramId: { error: true, message: "Invalid Telegram ID" },
        //     password: { error: false, message: "" }, // No error for password
        // }));
    }
}