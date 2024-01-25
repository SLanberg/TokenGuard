<script lang="ts">
	import whaleImage from '$lib/images/whale.png';
	import copyIconWhite from '$lib/images/copyWhite.svg';
	import copyIconBlack from '$lib/images/copyBlack.svg';
	import eye_white from '$lib/images/eye_white.png';
	import paramsStore from "./profile-summary";

	import { handleContinue, copyContentsOfTheFields } from './profile-summary';

	let revealPassword = false;
	const toggleRevealPassword = () => {
		revealPassword = !revealPassword
	}

	let showPopUp = true;
	const togglePopUp = () => {
		showPopUp = !showPopUp
	}

	let continueLoad = false;
	const handleContinueLoad = async () => {
		continueLoad = true;
	}
</script>

<svelte:head>
	<title>Data | Whale</title>
</svelte:head>

{#if showPopUp}
	<div class="z-10 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[325px] rounded-[10px] backdrop-blur-md bg-[#bfc5d9]/60">
		<div class="px-10">
			<h1 class="text-center text-black font-bold text-3xl mt-5">WARNING</h1>
			<br>
			<p class="text-black text-center">Make sure you will copy the data to your notepad or write it down before continuing.</p>
			<br>
			<p id="copy-text" class="text-black text-center">You can copy all the required data by pressing to the copy icon:</p><button on:click={copyContentsOfTheFields} class="absolute right-[70px] bottom-[100px]"><img src="{copyIconBlack}" alt="copyIcon"></button>

			<div class="flex justify-center">
				<button on:click={togglePopUp} class="mt-10 bg-[#43444A]
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-[#55565b]
                            text-[#BFC5D9]
                            font-bold
                            py-2
                            px-4
                            rounded-[10px]">
					Dismiss
				</button>
			</div>
		</div>
	</div>
{/if}

<div class="flex h-screen">
	<div class="m-auto w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
		<img class="mx-auto mb-10 p-4" id="mascot" src={whaleImage} alt="Whale" />

		<div class="m-auto w-fit">
			<div>
				<label class="text-left text-sm font-medium text-[#B8B8B8]" for="TelegramID"
				>TelegramID</label
				>
				<br />
				<input
						readonly
						class="mb-2.5
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
						value={$paramsStore.telegramId}
						id="telegramID"
						type="text"
						name="telegramID"
						required
				/>
			</div>

			<div>
				<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Password"
				>Password</label
				>
				<br />
				<input
						readonly
						class="mb-2.5
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
						value={$paramsStore.password}
						id="password"
						type={revealPassword ? "text" : "password"}
						name="password"
						required
				/>
				<button on:click|preventDefault={toggleRevealPassword} class="relative float-right -mt-[41px] mr-2"
				><img src={eye_white} alt="see password" /></button
				>
			</div>

			<div>
				<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password"
				>Token</label
				>
				<br />
				<input
						readonly
						class="mb-2.5
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
						value={$paramsStore.token}
						id="token"
						type={revealPassword ? "text" : "text"}
						name="password"
						required
				/>
			</div>

			<div>
				<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password"
				>Created At</label
				>
				<br />
				<input
						readonly
						id="createdAt"
						class="mb-10
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
                                outline-none
                                focus:border-[#5a70ec]
                                focus:ring-[#5a70ec]"
						class:fieldError={''}
						value="{$paramsStore.createdAt}"
						type="text"
						name="Created At"
						required
				/>
			</div>

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
							hover:bg-[#55565b]
							flex
							justify-center
							align-middle
							disabled:text-gray-600
							disabled:bg-gray-900"
					on:click={handleContinue}
					on:click={handleContinueLoad}
					disabled='{showPopUp}'
			>
				Continue

				{#if continueLoad}
					<div class="absolute ml-24" aria-label="Loading..." role="status">
						<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-6 h-6 stroke-slate-500">
							<path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
							</path>
						</svg>
					</div>
				{/if}
			</button>
		</div>

		<button class="float-right m-5" on:click={copyContentsOfTheFields}>
			<img src={copyIconWhite} alt="copyIcon" />
		</button>

	</div>
</div>

<style>
</style>
