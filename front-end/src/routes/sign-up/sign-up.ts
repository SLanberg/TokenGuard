import paramsStore from "../profile-summary/profile-summary";
import { goto } from '$app/navigation';

const backEndUrl = 'http://localhost:8000/api'

export const userRegistrationRequest = async (event: Event) => {
    const formEl = event.target as HTMLFormElement;
    const data = new FormData(formEl);

    const telegramID = data.get('telegramID')
    const password = data.get('password')

    // write error check here to see if the passwords match
    // const confirmPassword = data.get('confirm password')


    // Currently telegramID can be anything but what can be used to ensure it is legit telegramID?
    // 1. API call to the Telegram API
    // 2. Creation of the Telegram bot that writes to the TelegramID unique code that user should enter
    const response = await fetch(backEndUrl + "/auth/sign-up", {
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

        console.log(json)
        console.log(json.type)

        if (json.type === "success") {
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
        }

    }
