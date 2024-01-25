import { goto } from "$app/navigation";

export const tokenSubmitRequest = async (): Promise<void> => {
    // Send request to the server
    // Check there if the token is correct
    // If it is good! Send to the /profile and add to the state response from the server with the token
    await goto('/profile', {});

    // If the token is incorrect, log out user, send him to the home page and set state for the pop up true at the home
    // page
}
