<script lang="ts">
	import whaleImage from '$lib/images/whale.png';

	import { handleAvatarClick } from './menu';
	import {handleProfileContinue} from "../profile/profile";

	let menuLoad = false;
	const handleMenuLoad = async () => {
		menuLoad = true;
	}
</script>

<svelte:head>
	<title>Menu | Whale</title>
</svelte:head>

<div class="flex h-screen">
	<div
		class="m-auto h-[500px] w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
	>
		<button on:click={handleAvatarClick}
				on:click={handleMenuLoad}>
			<img
					src={whaleImage}
					class="absolute inset-1/2 mx-auto mb-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-900 p-4"
					alt="Whale Avatar"
			/>

		</button>


	</div>

	{#if menuLoad}
		<div class="absolute inset-1/2 mx-auto mb-10 mr-3 mt-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full" aria-label="Loading..." role="status">
			<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-6 h-6 stroke-slate-500">
				<path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
				</path>
			</svg>
		</div>
	{/if}
</div>

<style>
</style>
