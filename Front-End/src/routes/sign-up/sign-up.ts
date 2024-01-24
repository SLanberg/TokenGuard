import { goto } from '$app/navigation';
import { fail } from '@sveltejs/kit';

import paramsStore from "../profile-summary/profile-summary";

export var errorsPresented = false;
export var errorMessage = '';

export const userRegistrationPostRequest = async (): Promise<any> => {
    const telegramIdInput = document.querySelector('#telegramID') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;
    const confirmPasswordInput = document.querySelector('#password') as HTMLInputElement;

    const telegramIdValue: number = parseInt(telegramIdInput.value);
    const passwordValue: string = passwordInput.value;
    const confirmPasswordValue: string = confirmPasswordInput.value;

    if (telegramIdValue.toString().length > 0) {
        console.log('what?')

        return fail(400, {
            // telegramIdValue,
            errors: true,
            message: 'Missing username or password'
        })

    } else {
        const res = await fetch('http://10.0.0.33:8000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                telegramID: telegramIdValue,
                password: passwordValue,
            })
        });

        const json = await res.json();

        if (json.type === "success") {

            const date = new Date(json.createdAt);

            paramsStore.update(store => {
                store.telegramId = json.user['telegramid'];
                store.password = json.user['password'];
                store.token = json['token'];
                store.createdAt = date?.
                toLocaleDateString('en-US',
                    { year: 'numeric', day: 'numeric', month: 'numeric' });

                return store;
            });

            await goto('/profile-summary',{});
        } else {
            errorsPresented = true;
            errorMessage = json.response;
        }
    }
}

