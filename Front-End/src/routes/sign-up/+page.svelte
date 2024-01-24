<script lang="ts">
	import whaleImage from '$lib/images/whale.png';
	import eye_white from '$lib/images/eye_white.png';
	import { error } from "@sveltejs/kit";
	import attention_sign from "$lib/images/Info-triangle.png";

	let revealPassword = false

	const toggleRevealPassword = () => {
		revealPassword = !revealPassword
	}

	export let form;
	async function registerUser(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);

		console.log(data)

		// const response = await fetch(formEl.action, {
		// 	method: 'POST',
		// 	body: data
		// })

		// console.log(response)
		// form = await response.json()

		// formEl.reset()

		throw error(400, 'very-very sad');
	}
</script>

<svelte:head>
	<title>Sign Up | Whale</title>
</svelte:head>

<div class="flex h-screen">
	<div class="m-auto w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">

		<img class="mx-auto mb-10 p-4" id="mascot" src={whaleImage} alt="Whale" />
		<form method="POST" on:submit|preventDefault={registerUser}>
			<div class="m-auto w-fit">
				<div>
					<label class="text-left text-sm font-medium text-[#B8B8B8]" for="TelegramID"
					>TelegramID</label
					>

					<br />
					<input
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
							value={form?.telegramID ?? ''}
							id="telegramID"
							type="text"
							name="telegramID"
							required
					/>
				</div>

				<div class="flex items-center w-fit -mt-2.5">
					<img class="h-3 mr-0.5" src="{attention_sign}" alt="error-sign">
					<p class="text-red-600 text-sm">Incorrect TelegramID</p>
				</div>

				<div>
					<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Password">Password</label
					>
					<br />
					<input
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
							value={''}
							id="password"
							type={revealPassword ? "text" : "password"}
							name="password"
							required
					/>
					<button on:click|preventDefault={toggleRevealPassword} class="relative float-right -mt-[41px] mr-2"
					><img src={eye_white} alt="see password" /></button
					>
				</div>

				<div class="flex items-center w-fit -mt-2.5">
					<img class="h-3 mr-0.5" src="{attention_sign}" alt="error-sign">
					<p class="text-red-600 text-sm">Password is not secure enough</p>
				</div>

				<div>
					<label class="text-left text-sm font-medium text-[#B8B8B8]" for="Confirm Password"
					>Confirm Password</label
					>
					<br />
					<input
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
							id="confirmPassword"
							type={revealPassword ? "text" : "password"}
							name="Confirm Password"
							required
					/>
					<button on:click|preventDefault={toggleRevealPassword} class="relative float-right -mt-[51px] mr-2"
					><img src={eye_white} alt="see password" /></button
					>
				</div>

				<div class="flex items-center w-fit -mt-5">
					<img class="h-3 mr-0.5" src="{attention_sign}" alt="error-sign">
					<p class="text-red-600 text-sm">Passwords don't match</p>
				</div>

				<button
						type="submit"
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
				>
					Sign Up
				</button>
			</div>
		</form>

	</div>
</div>

<style>
</style>
