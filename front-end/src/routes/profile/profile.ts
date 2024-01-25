import { goto } from "$app/navigation";

export const logOutRequest = async (): Promise<void> => {
    const response = await fetch(import.meta.env.APP_MY_BACKEND + "/auth/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    console.log(response)


    await goto('/', {});
}


