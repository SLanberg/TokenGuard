<script lang="ts">
	import { enhance } from '$app/forms';
	import whaleImage from '$lib/images/whale.png';

	import { handleProfileContinue } from './profile';
</script>

<svelte:head>
	<title>Profile | Whale</title>
</svelte:head>

<div class="flex h-screen">
	<div
		class="m-auto h-[500px] w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
	>
		<img
				class="mx-auto my-auto mb-7 rounded-full bg-blue-950 mt-32"
				id="mascot"
				src={whaleImage}
				alt="Whale"
		/>

		<div class="m-auto w-fit">
			<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Secret Key"
			>Secret Key</label
			>
			<br />

			<input
					readonly
					class="mb-5
                                block
                                w-[300px]
                                rounded-[10px]
                                border
                                border-gray-600
                                bg-[#13161E]
                                p-2.5
                                text-sm
                                text-white
                                placeholder-gray-400
                                outline-none focus:border-[#5a70ec] focus:ring-[#5a70ec]"
					class:fieldError={''}
					value={''}
					id="password"
					type="password"
					name="password"
					required
			/>

			<button
					class="mb-10
                            w-[300px]
                            rounded-[10px]
                            bg-[#43444A]
                            px-4
                            py-2
                            font-bold
                            text-white
                            transition
                            duration-500
                            ease-in-out
                            hover:bg-[#55565b]"
					on:click={handleProfileContinue}
			>
				Log Out
			</button>
		</div>
	</div>
</div>

<style>
</style>
