<script lang="ts">
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';
	import { copyContentsOfTheFields } from './account-summary';
	import { paramsStore } from '../../stores/accountSummaryStore';
	import { goto } from '$app/navigation';
	import SpinningIcon from '../../components/shared/SpinningIcon.component.svelte';
	import ReadOnlyInputField from '../../components/primitives/inputs/ReadOnlyInputField.svelte';
	import { formatDateTime } from '../../utils/formatDate';
	import { onMount } from 'svelte';
	import { checkUserAuthentication } from '../../utils/isAuth';

	let showPopUp = true;
	const handleCopyButton = () => {
		copyContentsOfTheFields();
		showPopUp = !showPopUp;
	};

	onMount(async () => {
		await checkUserAuthentication({
			expectedToBeAuthenticated: true
		});
	});
</script>

<svelte:head>
	<title>Summary | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	{#if showPopUp}
		<div
			class="z-10
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
			<p class="text-center p-5 text-gold-main -mt-4">
				Copy the data by clicking on the icon and save it to your notes.
			</p>

			<button
				on:click={handleCopyButton}
				class="text-center
			bg-gradient-to-r
			from-gold-dark
			to-gold-lighter-dark
			w-[80px]
			p-2
			rounded-[8px]
			flex
			justify-center
			items-center"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
					<path
						fill="#fff"
						d="M9 3.25A5.75 5.75 0 0 0 3.25 9v7.107a.75.75 0 0 0 1.5 0V9A4.25 4.25 0 0 1 9 4.75h7.013a.75.75 0 0 0 0-1.5H9Z"
					/><path
						fill="#fff"
						fill-rule="evenodd"
						d="M18.403 6.793a44.372 44.372 0 0 0-9.806 0 2.011 2.011 0 0 0-1.774 1.76 42.581 42.581 0 0 0 0 9.893 2.01 2.01 0 0 0 1.774 1.76c3.241.363 6.565.363 9.806 0a2.01 2.01 0 0 0 1.774-1.76 42.579 42.579 0 0 0 0-9.893 2.011 2.011 0 0 0-1.774-1.76ZM8.764 8.284c3.13-.35 6.342-.35 9.472 0a.51.51 0 0 1 .45.444c.372 3.17.372 6.374 0 9.544a.51.51 0 0 1-.45.444c-3.13.35-6.342.35-9.472 0a.511.511 0 0 1-.45-.444c-.372-3.17-.372-6.374 0-9.544a.511.511 0 0 1 .45-.444Z"
						clip-rule="evenodd"
					/>
				</svg>
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

			<h2 class="mb-4 mt-1">Summary</h2>

			<div class="container mx-auto pt-5 w-[300px]">
				<ReadOnlyInputField value="{$paramsStore.telegramId}" name="Telegram ID" id="telegramID" />
				<ReadOnlyInputField value="{$paramsStore.password}" name="Password" id="password" />
				<ReadOnlyInputField value="{$paramsStore.token}" name="Token" id="token" />
				<ReadOnlyInputField value="{formatDateTime($paramsStore.createdAt)}" name="Created at" id="createdAt" />
			</div>

			<div class="mt-12" />

			<BigButton label="Continue" on:click={() => goto('/casino')} />

			<div class="mb-10" />
		</div>
	</div>
</div>

<style>
</style>
