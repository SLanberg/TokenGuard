import { goto } from '$app/navigation';
import { fieldsValidationSignUp, handleLoadEventsSignUp } from "../../state/sign-upState";
import { paramsStore } from "../../state/profile-summaryState";

const backend = import.meta.env.VITE_APP_MY_BACKEND


export const userRegistrationRequest = async (event: Event) => {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const telegramID = data.get('telegramID')
    const password = data.get('password')

    if (data.get('password') !== data.get('confirmPassword')) {
        fieldsValidationSignUp.update((currentValue) => ({
            ...currentValue,
            confirmPassword: { error: true, message: "Passwords don't match" }
        }));

        return;
    }

    fieldsValidationSignUp.update((currentValue) => ({
        ...currentValue,
        confirmPassword: { error: false, message: "" }
    }));

    handleLoadEventsSignUp.update(() => ({
        loadingSingUpPage: true
    }));

    // Currently telegramID can be anything but what can be used to ensure it is legit telegramID?
    // 1. API call to the Telegram API
    // 2. Creation of the Telegram bot that writes to the TelegramID unique code that user should enter
    const response = await fetch(backend + "/auth/sign-up", {
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

    handleLoadEventsSignUp.update(() => ({
        loadingSingUpPage: false
    }));
        if (json.type === "success") {
            document.cookie = `JWT=${json.jwt}; path=/;`;

            const date = new Date(json.createdAt);
            paramsStore.update(store => {
                store.telegramId = json.user['telegramid'];
                store.password = json.user['password'];
                store.token = json['token'];
                store.createdAt = date?.toLocaleDateString('en-US',
                    {year: 'numeric', day: 'numeric', month: 'numeric'});

                return store;
            });

            await goto('/profile-summary', {});
        } else {
            if (json.field === "TelegramID") {
                fieldsValidationSignUp.update((currentValue) => ({
                    ...currentValue,
                    telegramId: { error: true, message: json.response }
                }),
                );
            }
        }
    }
