import {goto} from "$app/navigation";

export const handleSignUpClick = async () => {
    await goto('/sign-up', {});
}
export const handleSignInClick = async () => {
    await goto('/menu', {});
}