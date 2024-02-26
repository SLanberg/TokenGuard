<script lang="ts">
	import PasswordField from '../components/primitives/inputs/PasswordField.component.svelte';
	import BigButton from '../components/primitives/buttons/BigButton.svelte';
	import { loginPopUpStore } from '../stores/loginStore';
	import InputField from '../components/primitives/inputs/InputField.component.svelte';
	import SpinningIcon from '../components/shared/SpinningIcon.component.svelte';
	import attention_sign from '$lib/images/Info_triangle.png';

	import { applyAction, enhance } from '$app/forms';
	import { loadingStore } from '../stores/loadingStore';
	import { goto } from '$app/navigation';

	interface Form {
		issueWith?: string;
		message?: string;
	}

	export let form: Form;
</script>

<svelte:head>
	<title>Foyer | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	{#if $loginPopUpStore.showPopUp}
		<div
			class="z-10
						h-fit
						absolute
						border-2
						border-gold-third
						transform
						inset-1/2
						-translate-x-1/2
						-translate-y-1/2
						bg-background-color
						w-[200px]
						rounded-[24px]
						flex
						flex-col
						justify-center
						items-center"
		>
			<p class="text-center p-5 text-gold-main">
				You entered incorrect security token or your session is expired. You were forcefully logged
				out.
			</p>

			<button
				on:click={() => {
					loginPopUpStore.update(() => ({
						showPopUp: false
					}));
				}}
				class="text-center
            bg-gradient-to-r
            from-gold-dark
            to-gold-lighter-dark
            w-[80px]
            p-2
            rounded-[8px]
						mb-4"
			>
				<p>Dismiss</p>
			</button>
		</div>
	{/if}

	<div class="text-center">
		<h1>Whale</h1>

		<div class="border-gold-main border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">
			<div class="flex items-center justify-between">
				<div class="flex-grow h-px left-to-right"></div>

				<div class="logo-container mx-3">
					<SpinningIcon />
				</div>

				<div class="flex-grow h-px right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Foyer</h2>

			<form
				method="POST"
				action="?/login"
				use:enhance={() => {
					$loadingStore = true;
					return async ({ result }) => {
						if (result.type === 'success') {
							$loadingStore = false;
							await goto('/casino', {});
						} else {
							$loadingStore = false;
							await applyAction(result);
						}
					};
				}}
			>
				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Telegram ID" id="telegramID" />

					{#if form?.issueWith === 'TelegramID'}
						<div class="w-fit -mt-2.5 mb-2.5">
							<span class="text-red-600 text-xs inline-block">
								<img class="h-3 mr-0.5 inline" src={attention_sign} alt="error-sign" />
								{form?.message}
							</span>
						</div>
					{/if}

					<PasswordField name="Password" id="password" />
					<div class="mb-10"></div>
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
</style>
