<script lang="ts">
	import whaleImage from '$lib/images/whale.png';

	import { enhance } from '$app/forms';

	let thisForm: HTMLFormElement;
	export let form;
	
	import { handleAvatarClick } from './menu';
</script>

<svelte:head>
	<title>Menu | Whale</title>
</svelte:head>

<div class="flex h-screen">
	<div
		class="m-auto h-[500px] w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
	>
		<div class="m-auto">
			<button on:click={handleAvatarClick}>
				<img
					src={whaleImage}
					class="absolute inset-1/2 mx-auto mb-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-950 p-4"
					alt="Whale Avatar"
				/>
			</button>
		</div>
	</div>
</div>

<style>
</style>
