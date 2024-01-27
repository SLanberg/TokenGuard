<script lang="ts">
	import {dismissPopUp, handleSignUpClick, signInUserRequest} from './login'

	import whaleImage from '$lib/images/whale.png';
	import sadWhaleImage from '$lib/images/sad_whale.png'
	import eye_white from '$lib/images/eye_white.png';
	import attention_sign from '$lib/images/Info-triangle.png'
	import { fieldsValidationSignIn, handleLoadEventsSignIn, popUpStateLogin } from "./loginState";

	let loadingSingUpPage = false;
	const handleSignUpLoad = async () => {
		loadingSingUpPage = true;
	}

	let revealPassword = false
	const toggleRevealPassword = () => {
		revealPassword = !revealPassword
	}
</script>

<svelte:head>
	<title>Foyer | Whale</title>
</svelte:head>

<div class="flex h-screen">
	{#if $popUpStateLogin.showPopUp}
	    <div class="z-10 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bfc5d9] w-[400px] h-[345px] rounded-[10px]">
	        <div class="px-10">
	            <br>
	            <p class="text-black text-center">Incorrect Token</p>
	            <img class="mx-auto my-auto mb-7" id="mascot" src={sadWhaleImage} alt="Whale">
	            <p class="text-black text-center">
	                You can login and try again or contact our tech support by the number <br /> +372 518 9349</p>
	            <div class="flex justify-center">
	                <button on:click={dismissPopUp}
							class="bg-[#43444A]
	                            transition
	                            ease-in-out
	                            duration-500
	                            hover:bg-[#55565b]
	                            text-[#BFC5D9]
	                            font-bold
	                            py-2
	                            px-4
	                            rounded-[10px]
								mt-10">
	                    Dismiss
	                </button>
	            </div>
	        </div>
	    </div>
	{/if}

	<div class="m-auto w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
		<img class="mx-auto mb-10 p-4" id="mascot" src={whaleImage} alt="Whale" />
		<div class="m-auto w-fit">

			<form method="POST" on:submit|preventDefault={signInUserRequest}>
				<div>
					<label class="text-left text-sm font-medium text-[#B8B8B8]" for="telegramID"
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
							value={''}
							id="telegramID"
							type="text"
							name="telegramID"
							required
					/>
				</div>

				{#if $fieldsValidationSignIn.telegramId.error}
					<div class="flex items-center w-fit -mt-2.5">
						<img class="h-3 mr-0.5" src="{attention_sign}" alt="error-sign">
						<p class="text-red-600 text-sm">TelegramID or Password is incorrect</p>
					</div>
				{/if}

				<div>
					<label class="text-left text-sm font-medium text-[#B8B8B8]" for="password"
					>Password</label
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
                                outline-none
                                focus:border-[#5a70ec]
                                focus:ring-[#5a70ec]"
							id="password"
							class:fieldError={''}
							value={''}
							type={revealPassword ? "text" : "password"}
							name="password"
							required
					/>

					<button on:click|preventDefault={toggleRevealPassword} class="relative float-right -mt-[51px] mr-2"
					><img src={eye_white} alt="see password" /></button
					>
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
							"
				>
					Sign In
					{#if $handleLoadEventsSignIn.loadingSingInPage}
						<div class="absolute ml-20" aria-label="Loading..." role="status">
							<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-6 h-6 stroke-slate-500">
								<path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
								</path>
							</svg>
						</div>
					{/if}
				</button>
			</form>

			<div class="mb-5">
				<div class="flex items-center justify-center">
					<p class="text-sm font-medium text-white text-center" id="sign-up">
						<button on:click={handleSignUpClick}
								on:click={handleSignUpLoad}><u>Sign Up</u></button>
					</p>
					{#if loadingSingUpPage}
						<div class="absolute ml-20" aria-label="Loading..." role="status">
							<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-6 h-6 stroke-slate-500">
								<path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
								</path>
							</svg>
						</div>
					{/if}
				</div>
			</div>
			<div class="mb-5"></div>
		</div>
	</div>
</div>

<style>
</style>
