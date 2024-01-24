<script lang="ts">
	import whaleImage from '$lib/images/whale.png';
	import sadWhaleImage from '$lib/images/sad_whale.png'
	import eye_white from '$lib/images/eye_white.png';

	let revealPassword = false
	let showPopUp = false;

	const togglePopUp = () => {
		showPopUp = !showPopUp
	}
</script>

<svelte:head>
	<title>Foyer | Whale</title>
</svelte:head>


<div class="flex h-screen">

	{#if showPopUp}
	    <div class="z-10 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bfc5d9] w-[400px] h-[345px] rounded-[10px]">
	        <div class="px-10">
	            <br>
	            <p class="text-black text-center">Incorrect Token</p>
	            <img class="mx-auto my-auto mb-7" id="mascot" src={sadWhaleImage} alt="Whale">
	            <p class="text-black text-center">
	                You can login and try again or contact our tech support by the number <br /> +372 518 9349</p>
	            <div class="flex justify-center">
	                <button on:click={togglePopUp}
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
			<div class="form-item">
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
							value={''}
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
							type={revealPassword ? "text" : "password"}
							name="password"
							required
					/>

					<button on:click|preventDefault={() => revealPassword = !revealPassword} class="relative float-right -mt-[51px] mr-2"
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
                            hover:bg-[#55565b]"
				>
					Sign In
				</button>

				<p class="mb-10 text-left text-sm font-medium text-white text-center" id="sign-up">
					<u><a href="/sign-up">Sign Up</a></u>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
