<script lang="ts">
	import roulette_icon from '$lib/images/roulette_icon.svg';

	let revealPassword = false;
	const toggleRevealPassword = () => {
		revealPassword = !revealPassword;
	};
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
					<img src={roulette_icon} alt="Your Logo" />
				</div>
				<div class="gradient-line right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Foyer</h2>

			<div class="container mx-auto pt-5 w-[300px]">
				<input
					placeholder="Telegram ID"
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
                                "
				/>
				<div class="flex items-center mb-3 bg-[#272c2f] rounded-[8px]">
					<input
						placeholder="Password"
						class="placeholder-[#6c6f72]
			block
			rounded-[8px]
			w-[240px]
			bg-[#272c2f]
			p-2.5
			text-sm
			text-white
			outline-none
		"
						type={revealPassword ? 'text' : 'password'}
					/>
					<button on:click|preventDefault={toggleRevealPassword} class="hover:color-[#55565b]">
						{#if !revealPassword}
							<svg class="hover:fill-white fill-white/50 duration-500 mr-3" width="16" height="16">
								<path
									d="m10.483 9.016-.733-.733c.289-.789.139-1.444-.45-1.967-.589-.522-1.228-.655-1.917-.4l-.733-.733c.189-.122.4-.211.633-.267.234-.055.472-.083.717-.083.789 0 1.458.275 2.008.825.55.55.825 1.22.825 2.008 0 .245-.03.487-.091.725a2.201 2.201 0 0 1-.259.625Zm2.15 2.15-.666-.666c.544-.4 1.019-.847 1.425-1.342.405-.494.702-.992.891-1.492a6.653 6.653 0 0 0-2.5-2.925 6.545 6.545 0 0 0-3.616-1.075c-.467 0-.945.045-1.434.134-.489.089-.872.194-1.15.316l-.766-.783c.388-.178.886-.333 1.491-.467a8.242 8.242 0 0 1 1.775-.2c1.5 0 2.883.412 4.15 1.234a8 8 0 0 1 2.9 3.316.531.531 0 0 1 .067.2 1.955 1.955 0 0 1 0 .508.542.542 0 0 1-.067.21 7.996 7.996 0 0 1-1.066 1.682c-.423.512-.9.962-1.434 1.35Zm.6 3.4L10.8 12.183a6.477 6.477 0 0 1-1.317.358A8.815 8.815 0 0 1 8 12.666a7.634 7.634 0 0 1-4.217-1.233A7.96 7.96 0 0 1 .867 8.116.702.702 0 0 1 .8 7.908a1.598 1.598 0 0 1 .008-.5c.017-.083.036-.153.059-.208.233-.5.53-.986.891-1.459.361-.472.786-.919 1.275-1.341l-1.75-1.75a.48.48 0 0 1 0-.7c.1-.1.22-.15.359-.15A.49.49 0 0 1 2 1.95l11.933 11.933a.442.442 0 0 1 .133.325.5.5 0 0 1-.133.342.418.418 0 0 1-.341.166.489.489 0 0 1-.359-.15ZM3.717 5.1c-.412.3-.809.694-1.192 1.183-.383.489-.658.95-.825 1.383a6.674 6.674 0 0 0 2.558 2.925c1.14.717 2.43 1.075 3.875 1.075.367 0 .728-.022 1.084-.066.355-.045.622-.111.8-.2L8.95 10.333a1.74 1.74 0 0 1-.45.125 3.246 3.246 0 0 1-.5.042 2.756 2.756 0 0 1-2-.817c-.556-.544-.833-1.217-.833-2.017 0-.166.013-.333.041-.5.028-.166.07-.316.125-.45L3.717 5.1Z"
								/>
							</svg>
						{:else}
							<svg class="hover:fill-white duration-500 fill-[#ffd59a] mr-3" width="15" height="10">
								<path
									d="M7.217 7.833c.789 0 1.458-.275 2.008-.825.55-.55.825-1.22.825-2.008 0-.789-.275-1.458-.825-2.008a2.733 2.733 0 0 0-2.008-.825c-.79 0-1.459.275-2.009.825-.55.55-.825 1.22-.825 2.008 0 .789.275 1.458.825 2.008.55.55 1.22.825 2.009.825Zm0-.966c-.523 0-.964-.18-1.325-.542A1.802 1.802 0 0 1 5.35 5c0-.522.18-.964.542-1.325a1.802 1.802 0 0 1 1.325-.542c.522 0 .964.18 1.325.542.36.361.541.803.541 1.325 0 .522-.18.964-.541 1.325a1.802 1.802 0 0 1-1.325.542Zm0 3.133a7.441 7.441 0 0 1-4.192-1.25A8.436 8.436 0 0 1 .1 5.45a.652.652 0 0 1-.075-.2A1.192 1.192 0 0 1 0 5c0-.089.008-.172.025-.25a.652.652 0 0 1 .075-.2 8.436 8.436 0 0 1 2.925-3.3A7.441 7.441 0 0 1 7.217 0c1.533 0 2.93.417 4.191 1.25a8.436 8.436 0 0 1 2.925 3.3.649.649 0 0 1 .075.2c.017.078.025.161.025.25s-.008.172-.025.25a.649.649 0 0 1-.075.2 8.436 8.436 0 0 1-2.925 3.3A7.441 7.441 0 0 1 7.217 10Zm0-1c1.344 0 2.58-.364 3.708-1.092A7.084 7.084 0 0 0 13.5 5a7.084 7.084 0 0 0-2.575-2.908A6.702 6.702 0 0 0 7.217 1c-1.345 0-2.58.364-3.709 1.092A7.203 7.203 0 0 0 .917 5a7.203 7.203 0 0 0 2.591 2.908A6.702 6.702 0 0 0 7.217 9Z"
								/>
							</svg>
						{/if}
					</button>
				</div>
				<div class="text-left mb-10 duration-500 text-white/50 hover:text-white cursor-pointer">
					<p>Forgot password?</p>
				</div>
			</div>

			<button
				class="w-[300px]
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
			bg-gradient
			before:ease
			relative
			overflow-hidden
			shadow-2xl
			before:duration-500
			hover:before:translate-x-80
			hover:shadow-[#aa916d]/10
"
			>
				<span class="relative z-10">Sign In</span>
			</button>

			<p class="m-10">
				New member? <span
					class="text-[#9F8E62] hover:text-[#ffd59a] duration-500 sign-up-p cursor-pointer"
					><b>Sign up</b></span
				>
			</p>
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
		color: #ffd59a;
		font-family: 'Cinzel', serif;
	}
	h2 {
		font-size: 26px;
		font-weight: 500;
		line-height: 43px;
		letter-spacing: 0.04em;
		color: #9f8e62;
		font-family: 'Cinzel', serif;
	}

	.bg-gradient {
		background-image: linear-gradient(to right, #7d6834, #998759);
	}

	p {
		font-size: 12px;
		font-family: 'Prompt', serif;
	}

	.sign-up-p {
		text-shadow: 0 4px 50px #dd8100;
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
		background: linear-gradient(to right, #13181c, #ffd59a);
	}

	.right-to-left {
		background: linear-gradient(to left, #13181c, #ffd59a);
	}

	.logo-container {
		margin: 0 12px;
	}

	.logo-container img {
		width: 23px;
		height: auto;
	}
</style>
