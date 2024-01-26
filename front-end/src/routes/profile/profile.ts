import { goto } from "$app/navigation";

export const logOutRequest = async (): Promise<void> => {
    const response = await fetch(import.meta.env.APP_MY_BACKEND + "/auth/logout", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    document.cookie =  document.cookie +"; expires=" + "Thu, 01 Jan 1970 00:00:00 UTC"

    // console.log(response)

    await goto('/', {});
}


