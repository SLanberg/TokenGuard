<script lang="ts">
	import PasswordField from '../../components/primitives/inputs/PasswordField.component.svelte';
	import InputField from '../../components/primitives/inputs/InputField.component.svelte';
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';
	import { popUpStateLogin } from '../../stores/loginStore';
	import SpinningIcon from '../../components/shared/SpinningIcon.component.svelte';

	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { paramsStore } from '../../stores/accountSummaryStore';

	import InputFieldError from "../../components/primitives/inputs/InputFieldError.component.svelte";

	import { loadingStore } from '../../stores/loadingStore';

	interface Form {
		issueWith?: string,
		message?: string;
	}

	export let form: Form;
</script>

<svelte:head>
	<title>Foyer | Whale</title>
</svelte:head>



<div class="min-h-screen flex items-center justify-center">
	{#if $popUpStateLogin.showPopUp}
		<div
			class="z-10
                absolute
                border
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
                items-center"
		>
			<p class="text-center p-5 text-gold-main -mt-4">
				You entered incorrect security token or your session is expired.
				You were forcefully logged out.
			</p>

			<button
				class="text-center
			bg-gradient-to-r
			from-gold-dark
			to-gold-lighter-dark
			w-[80px]
			p-2
			rounded-[8px]">
				<p>Dismiss</p>
			</button>
		</div>
	{/if}

	<div>
		<h1 class="text-center">Whale</h1>

		<div class="border-gold-main border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">
			<div class="flex items-center justify-between">
				<div class="flex-grow h-px left-to-right"></div>

				<div class="logo-container mx-3">
					<SpinningIcon />
				</div>

				<div class="flex-grow h-px right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1 text-center">Registration</h2>

			<form class="mb-10" method="POST" action="?/register" use:enhance={() => {
			$loadingStore = true;
			return async ({ result }) => {
				if (result.type === 'success') {
					paramsStore.update((store) => {
							if (result && result.data) {
								if (typeof result.data.telegramID === 'string'
								&& typeof result.data.password === 'string'
								&& typeof result.data.token === 'string'
								&& typeof result.data.createdAt === 'string' ) {
									store.telegramId = result.data.telegramID;
									store.password = result.data.password;
									store.token = result.data.token;
									store.createdAt = result.data.createdAt;
								}
							}
							return store;
					});

				$loadingStore = false;
				await goto('/account-summary', {});

				} else {

				$loadingStore = false;
				await applyAction(result);
			}};
		}}>

				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Telegram ID" id="telegramID" />
					{#if form?.issueWith === "TelegramID" }
						<InputFieldError message="{form?.message}" />
					{/if}

					<PasswordField name="Password" id="password" />
					{#if form?.issueWith === "Password" }
						<InputFieldError message="{form?.message}" />
					{/if}

					<PasswordField name="Confirm password" id="confirmPassword" />
					{#if form?.issueWith === "Confirm password" }
						<InputFieldError message="{form?.message}" />
					{/if}
				</div>

				<div class="mt-12" />

				<BigButton label="Sign Up" />
			</form>
		</div>
	</div>
</div>

<style>

</style>
