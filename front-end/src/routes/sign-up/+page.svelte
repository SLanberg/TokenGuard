<script lang="ts">
	import PasswordField from '../../components/primitives/inputs/PasswordField.component.svelte';
	import InputField from '../../components/primitives/inputs/InputField.component.svelte';
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';
	import { popUpStateLogin } from '../../stores/loginStore';
	import { userRegistrationRequest } from './sign-up';
	import SpinningIcon from '../../components/shared/SpinningIcon.component.svelte';
	import attention_sign from '$lib/images/Info_triangle.png';
	import { fieldsValidationSignUp } from '../../stores/signUpStore';
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

			<form class="mb-10" method="POST" on:submit|preventDefault={userRegistrationRequest}>
				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Telegram ID" id="telegramID" />

					{#if $fieldsValidationSignUp.telegramId.error}
						<div class="w-fit -mt-2.5 mb-2.5">
							<span class="text-red-600 text-xs inline-block">
									<img class="h-3 mr-0.5 inline" src={attention_sign} alt="error-sign" />{$fieldsValidationSignUp.telegramId.message}
							</span>
						</div>
					{/if}

					<PasswordField name="Password" id="password" />

					{#if $fieldsValidationSignUp.password.error}
						<div class="w-fit -mt-2.5 mb-2.5">
							<span class="text-red-600 text-xs inline-block">
									<img class="h-3 mr-0.5 inline" src={attention_sign} alt="error-sign" />{$fieldsValidationSignUp.password.message}
							</span>
						</div>
					{/if}

					<PasswordField name="Confirm password" id="confirmPassword" />

					{#if $fieldsValidationSignUp.confirmPassword.error}
						<div class="w-fit -mt-2.5 mb-2.5">
							<span class="text-red-600 text-xs inline-block">
									<img class="h-3 mr-0.5 inline" src={attention_sign} alt="error-sign" />{$fieldsValidationSignUp.confirmPassword.message}
							</span>
						</div>
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
