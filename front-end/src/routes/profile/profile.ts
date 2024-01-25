import { goto } from "$app/navigation";

const backEndUrl = 'http://localhost:8000/api/'

export const logOutRequest = async (): Promise<void> => {
    const response = await fetch(backEndUrl + "/auth/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    console.log(response)


    await goto('/', {});
}


