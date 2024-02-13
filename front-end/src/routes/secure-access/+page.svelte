<script lang="ts">
	import { signInUserRequest } from '../sign-in';
	import InputField from '../../components/primitives/inputs/InputField.component.svelte';
	import keyFrame from '$lib/images/keyFrame.svg';
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';
</script>

<svelte:head>
	<title>Security Check | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	<div class="text-center">
		<h1>Whale</h1>

		<div class="border-gold-main border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">
			<div class="flex items-center justify-between">
				<div class="flex-grow h-px left-to-right"></div>

				<div class="logo-container mx-3">
					<img src={keyFrame} alt="key frame icon" />
				</div>

				<div class="flex-grow h-px right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Vault</h2>

			<form method="POST" on:submit|preventDefault={signInUserRequest}>
				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Security Key" />
				</div>
				<BigButton label="Submit" />
			</form>

			<div class="mb-20"></div>
		</div>
	</div>
</div>

<style>
	.left-to-right {
		background: linear-gradient(to right, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}
	.right-to-left {
		background: linear-gradient(to left, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}
</style>
