import { goto } from "$app/navigation";

const backEndUrl = 'http://localhost:8000/api/'

export const handleSignUpClick = async () => {
    await goto('/sign-up', {});
}

export const signInUserRequest = async (event: Event) => {
    // Send API request to the BackEnd

    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const telegramID = data.get('telegramID')
    const password = data.get('password')

    const response = await fetch(backEndUrl + "/auth/sign-in", {
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
        // If success accept cookie -> redirect
        return await goto('/menu',{});
    } else if (json.type === "error") {
        return console.log('pizdec');
    }
}