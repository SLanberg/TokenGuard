<script lang="ts">
	import keyFrame from '$lib/images/icons/key_frame.svg';
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';
	import ReadOnlyInputField from '../../components/primitives/inputs/ReadOnlyInputField.svelte';
	import { secretKeyParam } from '../../stores/secureAccessStore';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Secret Key | Whale</title>
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

			<h2 class="mb-4 mt-1">Secret Key</h2>

			<div class="container mx-auto pt-5 w-[300px]">
				<ReadOnlyInputField value="{$secretKeyParam.secretKey}" name="Security key" id="securityKey" />
			</div>
			<BigButton on:click={() => goto('/casino')} label="Go back to Casino" />

			<div class="mb-20"></div>
		</div>
	</div>
</div>

<style>
</style>
