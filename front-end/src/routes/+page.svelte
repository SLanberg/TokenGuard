<script lang="ts">
	import roulette_icon from '$lib/images/roulette_icon.svg';

	import PasswordField from '../components/primitives/inputs/PasswordField.component.svelte';
	import BigButton from '../components/primitives/buttons/BigButton.svelte';
	import { signInUserRequest } from './sign-in';
	import { popUpStateLogin } from '../stores/loginStore';
	import InputField from '../components/primitives/inputs/InputField.component.svelte';
</script>

<svelte:head>
	<title>Foyer | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	{#if $popUpStateLogin.showPopUp}
		<div class="z-10
                absolute
                border-2
                border-gold-third
                transform
                inset-1/2
                -translate-x-1/2
                -translate-y-1/2
                bg-background-color
                w-[200px]
                h-[150px]
                rounded-[24px]
                flex
                flex-col
                justify-center
                items-center">

			<p class="text-center p-5 text-gold-main -mt-4">You entered incorrect security token. You were forcefully logged out.</p>

			<button class="text-center
			bg-gradient-to-r
			from-gold-dark
			to-gold-lighter-dark
			w-[80px]
			p-2
			rounded-[8px]"
			><p>Dismiss</p></button>

		</div>
	{/if}

	<div class="text-center">
		<h1>Whale</h1>

		<div class="border-gold-main border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">
			<div class="flex items-center justify-between">
				<div class="flex-grow h-px left-to-right"></div>

				<div class="logo-container mx-3">
					<img class="w-6 h-auto" src={roulette_icon} alt="Roulette icon" />
				</div>

				<div class="flex-grow h-px right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Foyer</h2>

			<form method="POST" on:submit|preventDefault={signInUserRequest}>
				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Telegram ID" />
					<PasswordField name="Password" />

					<div class="text-left mb-10 duration-500 text-white/50 hover:text-white cursor-pointer">
						<p>Forgot password?</p>
					</div>
				</div>

				<BigButton label="Sign In" />
			</form>

			<p class="m-10">
				New member? <span
					class="text-gold-main hover:text-gold-secondary duration-500 text-shadow-custom cursor-pointer"
				>
					<a href="/sign-up"><b>Sign up</b></a>
				</span>
			</p>
		</div>
	</div>
</div>

<style>
	.text-shadow-custom {
		text-shadow: 0 4px 50px hsl(35, 100%, 80%);
	}
	.left-to-right {
		background: linear-gradient(to right, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}
	.right-to-left {
		background: linear-gradient(to left, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}

	.logo-container img {
		animation-duration: 0.6s;
		animation-fill-mode: forwards;
	}
	.logo-container img:hover {
		animation-name: spin;
	}
	@keyframes spin {
		100% {
			transform: rotate(720deg);
		}
	}
</style>
