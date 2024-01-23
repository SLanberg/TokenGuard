<script lang="ts">
	import { enhance } from '$app/forms';

	import whaleImage from '../../static/whale.png';
	export let form;

	let thisForm: HTMLFormElement;
</script>

<div class="flex h-screen">
	<div
		class="m-auto h-[500px] w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
	>
		<div class="m-auto">
			<img
				src={whaleImage}
				class="absolute inset-1/2 mx-auto mb-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-950 p-4"
				alt="Whale Avatar"
			/>
		</div>
	</div>
</div>

<style>
</style>
