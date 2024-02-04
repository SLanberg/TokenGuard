<script lang="ts">
	import roulette_icon from '$lib/images/roulette_icon.svg';
	import eye_icon from "$lib/images/eye_icon.svg";
</script>



<svelte:head>
	<title>ND | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	<div class="text-center">
		<h1>Whale</h1>

		<div class="border-[#9F8E62] border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">

			<div class="line-container">
				<div class="gradient-line left-to-right"></div>
				<div class="logo-container">
					<img src={roulette_icon} alt="Your Logo">
				</div>
				<div class="gradient-line right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Foyer</h2>

			<div class="container mx-auto pt-5 w-[300px]">
				<input placeholder="Telegram ID"
						class="mb-3
                                block
                                w-[300px]
                                rounded-[8px]
                                bg-[#272c2f]
                                p-2.5
                                text-sm
                                text-white
                                placeholder-[#6c6f72]
                                outline-none
                                " />
				<input placeholder="Password"
						class="mb-3
						placeholder-[#6c6f72]
                                block
                                w-[300px]
                                rounded-[8px]
                                bg-[#272c2f]
                                p-2.5
                                text-sm
                                text-white
                                outline-none
                             	" />
				<button
						on:click|preventDefault={() => {}}
						class="relative float-right -mt-[40px] mr-3"
				><img src={eye_icon} alt="see password" /></button
				>

				<div class="text-left mb-10">
					<p>Forgot password?</p>
				</div>
			</div>

			<button class="w-[300px]
							rounded-[8px]
							bg-[#43444A]
							px-4
							py-2
							text-white
							transition
							duration-500
							ease-in-out
							hover:bg-[#55565b]
							flex
							justify-center
							align-middle
							bg-gradient">
				Sign In
			</button>

			<p class="m-10">New member? <span class="text-[#9F8E62] sign-up-p"><b>Sign up</b></span></p>
		</div>
	</div>
</div>

<style>
	@font-face {
		src: url('$lib/fonts/Cinzel/Cinzel-Bold.ttf');
		font-family: 'Cinzel';
	}

	@font-face {
		src: url('$lib/fonts/Prompt/Prompt-Regular.ttf');
		font-family: 'Prompt';
		font-weight: normal;
	}

	h1 {
		font-size: 32px;
		font-weight: 900;
		line-height: 43px;
		letter-spacing: 0.21em;
		color: #FFD59A;
		font-family: "Cinzel", serif;
	}

	h2 {
		font-size: 26px;
		font-weight: 500;
		line-height: 43px;
		letter-spacing: 0.04em;
		color: #9F8E62;
		font-family: "Cinzel", serif;
	}

	.bg-gradient {
		background-image: linear-gradient(to right, #7d6834, #998759);
	}

	p {
		font-size: 12px;
		color: #6c6f72;
		font-family: "Prompt", serif;
	}

	.sign-up-p {
		text-shadow: 0 4px 50px #DD8100;
	}

	input {
		width: 300px;
		padding-left: 15px;
	}

	.line-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.gradient-line {
		flex-grow: 1;
		height: 1px; /* Adjust as needed */
	}

	.left-to-right {
		background: linear-gradient(to right, #13181c, #FFD59A);
	}

	.right-to-left {
		background: linear-gradient(to left, #13181c, #FFD59A);
	}

	.logo-container {
		margin: 0 12px;
	}

	.logo-container img {
		width: 23px;
		height: auto;
	}
</style>
