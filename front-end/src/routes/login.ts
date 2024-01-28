import { goto } from "$app/navigation";
import { fieldsValidationSignIn, handleLoadEventsSignIn, popUpStateLogin } from "../state/loginState";

export const handleSignUpClick = async () => {
    await goto('/sign-up', {});
}

export const dismissPopUp = async () => {
    popUpStateLogin.update(() => ({
        showPopUp: false,
    }
    ),
        );
}

export const signInUserRequest = async (event: Event) => {
    // Send API request to the BackEnd
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const telegramID = data.get('telegramID')
    const password = data.get('password')

    handleLoadEventsSignIn.update(() => ({
        loadingSingInPage: true
    }));

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
        fieldsValidationSignIn.update(() => ({
            // ...currentValue,
            telegramId: { error: false, message: "" },
            password: { error: false, message: "" }, // No error for password
        }));

        handleLoadEventsSignIn.update(() => ({
            loadingSingInPage: false
        }));

        return await goto('/menu',{});
    } else {
        // Example of updating the store
        fieldsValidationSignIn.update(() => ({
            telegramId: { error: true,
                message: "Invalid Telegram ID" },
            password: { error: false,
                message: "" }, // No error for password
        }));

        handleLoadEventsSignIn.update(() => ({
            loadingSingInPage: false
        }));
    }
}