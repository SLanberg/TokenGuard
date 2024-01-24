<script lang="ts">
	import whaleImage from '$lib/images/whale.png';
	import copyIconWhite from '$lib/images/copyWhite.svg';
	import copyIconBlack from '$lib/images/copyBlack.svg';
	import toast from 'svelte-french-toast';
	import paramsStore from "./profile-summary";

	import eye_white from '$lib/images/eye_white.png';

	import { handleContinue } from './profile-summary';

	let revealPassword = false;
	let showPopUp = true;

	const togglePopUp = () => {
		showPopUp = !showPopUp
	}

	const copyContentsOfTheFields = () => {
		const telegramIdInput = document.querySelector('#telegramID') as HTMLInputElement;
		const passwordInput = document.querySelector('#password') as HTMLInputElement;
		const tokenInput = document.querySelector('#token') as HTMLInputElement;
		const createdAtInput = document.querySelector('#createdAt') as HTMLInputElement;

		const inputData = {
			telegramId: telegramIdInput.value,
			password: passwordInput.value,
			token: tokenInput.value,
			createdAt: createdAtInput.value
		}

		console.log(inputData)

		navigator.clipboard.writeText(`Telegram id: ${inputData.telegramId} 
Password: ${inputData.password} 
Token: ${inputData.token} 
Created at: ${inputData.createdAt}`)

		toast.success('Copied', {
			position: "bottom-center",
			style: "background-color: black; color: white;"
		})

		// TODO: complete this part and save it to the clipboard
	}
</script>


{#if showPopUp}
	<div class="z-10 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bfc5d9] w-[400px] h-[325px] rounded-[10px]">
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


<svelte:head>
	<title>Data | Whale</title>
</svelte:head>

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
				<button on:click|preventDefault={() => revealPassword = !revealPassword} class="relative float-right -mt-[41px] mr-2"
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
                            hover:bg-[#55565b]"
					on:click={handleContinue}
			>
				Continue
			</button>
		</div>

		<button class="float-right m-5" on:click={copyContentsOfTheFields}>
			<img src={copyIconWhite} alt="copyIcon" />
		</button>


	</div>
</div>

<style>
</style>
