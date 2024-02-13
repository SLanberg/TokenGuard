<script lang="ts">
	import ton from '$lib/images/icons/ton.svg';
	import info from '$lib/images/icons/info.svg';
	import chest from '$lib/images/icons/chest.svg';
	import community from '$lib/images/icons/community.svg';
	import cards from '$lib/images/icons/cards.svg';
	import avatar from '$lib/images/avatar_picture.gif';
	import logo from '$lib/images/logo.svg';
	import arrow_down from '$lib/images/arrow_down.svg';
	import vault from '$lib/images/vault.svg';
	import game2 from '$lib/images/hero/Boss Bear.jpg';
	import game3 from '$lib/images/hero/money-train-4.webp';
	import video from '$lib/images/genie.mp4';
	import title from '$lib/images/hero/genie x pixies.png';
	import '@splidejs/svelte-splide/css';

	import { onMount } from 'svelte';

	import { initFlowbite } from 'flowbite';

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';

	let isOpen = false;
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	$: isProfileDropdown = isOpen ? 'bg-[#0d1316]' : '';

	function handleOutsideClick(event: MouseEvent) {
		if (!(event.target instanceof HTMLElement && event.target.closest('.profile-dropdown'))) {
			isOpen = false;
		}
	}

	// Add event listener for clicks on document
	// to close dropdown when clicking outside
	onMount(() => {
		initFlowbite();

		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<svelte:head>
	<title>Play Ground | Whale</title>
</svelte:head>

<nav class="bg-black">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-12 items-center justify-between">
			<div
				class="absolute inset-y-0 left-3 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 h-full"
			>
				<div class="flex flex-shrink-0 items-start">
					<img class="h-8 w-auto" src={logo} alt="Your Company" />
				</div>
			</div>

			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 h-full"
			>
				<div class="flex items-center">
					<img alt="currency symbol" src={ton} class="mr-1" />
					<p class="text-gold-main">10,000.00 TON</p>
				</div>

				<!-- Profile dropdown -->
				<button on:click|preventDefault={toggleDropdown}>
					<div
						class="p-2 ml-1 flex items-center hover:bg-[#0d1316] h-full profile-dropdown {isProfileDropdown}"
					>
						<img class="h-8 w-8 rounded-full" src={avatar} alt="Profile avatar" />
						<img class="h-1 w-1 rounded-full ml-1" src={arrow_down} alt="" />
					</div>
				</button>

				<div class="relative ml-3">
					{#if isOpen}
						<div
							class="absolute right-3 z-10 mt-4 w-48 origin-top-right bg-[#0d1316] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d] rounded-t-[8px]"
								role="menuitem">Your Profile</a
							>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d]"
								role="menuitem">Settings</a
							>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d] rounded-b-[8px]"
								role="menuitem">Sign out</a
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>

<br />

<div class="flex flex-col items-center justify-center">
	<div class="bg-[#0C1216] h-[300px] rounded-[8px] mb-5 relative sm:w-full md:w-[500px]">
		<Splide
			options={{
				rewind: true,
				autoplay: true,
				gap: 4,
				interval: 7500,
				pagination: true,
				arrows: false
			}}
			aria-label="Svelte Splide Hero"
		>
			<SplideSlide>
				<div class="bg-[#0C1216] h-[300px] rounded-[8px] mb-5 relative sm:w-full md:w-[500px]">
					<div class="mx-auto flex justify-between cursor-pointer h-full">
						<!-- svelte-ignore a11y-media-has-caption -->
						<video class="object-cover rounded-[8px] w-full" height="100%" autoplay loop>
							<source src={video} type="video/mp4" />
						</video>
						<img src={title} class="absolute inset-0 mx-auto my-auto" alt="Hero" />
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="bg-[#0C1216] h-[300px] rounded-[8px] mb-5 relative sm:w-full md:w-[500px]">
					<div class="mx-auto flex justify-between cursor-pointer h-full">
						<img class="object-cover rounded-[8px] w-full" src={game2} alt="Game" />
					</div>
				</div>
			</SplideSlide>
			<SplideSlide>
				<div class="bg-[#0C1216] h-[300px] rounded-[8px] mb-5 relative sm:w-full md:w-[500px]">
					<div class="mx-auto flex justify-between cursor-pointer h-full">
						<img class="object-cover rounded-[8px] w-full" src={game3} alt="Game" />
					</div>
				</div>
			</SplideSlide>
		</Splide>
	</div>

	<div class="bg-[#0C1216] h-fit rounded-[8px] w-full sm:w-full md:w-[500px]">
		<div class="mx-auto flex justify-between h-full">
			<div class="flex-1 p-4">
				<div class="flex items-center">
					<p>Treasure Hunter's Haul</p>
					<img
						data-tooltip-target="tooltip"
						data-tooltip-trigger="click"
						data-tooltip-placement="top"
						alt="info"
						src={info}
						class="ml-1 cursor-pointer"
					/>

					<div
						id="tooltip"
						role="tooltip"
						class="w-[300px] absolute z-10 invisible inline-block px-3 py-2
					text-sm font-medium text-white bg-[#1f292d] rounded-lg shadow-sm opacity-0 tooltip duration-200"
					>
						Players contribute cashback (0.5% to 1.5% of their bets) to the Treasure Hunter's Haul.
						As the pool grows, players get a chance to roll the loot box for a shot at winning the
						"Total cash back" sum from all contributors.
						<div class="tooltip-arrow" data-popper-arrow></div>
					</div>
				</div>

				<br />
				<p>Collective Ante</p>
				<div class="flex items-center">
					<img alt="currency symbol" src={ton} class="mr-1" />
					<p class="text-gold-main">9,666.00 TON</p>
				</div>
			</div>

			<div class="h-px bg-white/10 w-1/2 self-center"></div>

			<button
				class="flex-1 hover:bg-[#fff]/10 duration-500 hover:rounded-r-[8px] p-4 flex items-center justify-center"
			>
				<img alt="chest" src={chest} class="mr-1" />
			</button>
		</div>
	</div>

	<div class="grid mt-5 grid-cols-4 gap-2 w-full sm:w-full md:w-[500px] mb-5">
		<div class="bg-[#292e31] h-[140px] rounded-[8px] flex flex-col justify-center items-center">
			<img class="h-12 mb-2" alt="vault" src={vault} />
			<p>Vault</p>
		</div>

		<div
			class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
		>
			<img class="h-12 mb-2" alt="vault" src={cards} />
			<p>Tournaments</p>
		</div>
		<div
			class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
		>
			<img class="h-12 mb-2" alt="vault" src={cards} />
			<p>Withdrawal</p>
		</div>
		<div
			class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
		>
			<img class="h-12 mb-2" alt="vault" src={community} />
			<p>Community</p>
		</div>
	</div>

	<div class="h-fit rounded-[8px] w-full sm:w-full md:w-[500px]">
		<Splide options={{ perPage: 4, gap: 8, arrows: false, pagination: false }}>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
			<SplideSlide>
				<div
					class="bg-[#13181c] h-[140px] rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center"
				>
					<img class="h-12 mb-2" alt="vault" src={cards} />
				</div>
			</SplideSlide>
		</Splide>
	</div>
</div>

<style>
	.h-px {
		width: 2px;
		height: 75px;
		content: ' ';
	}

	:global(.splide__pagination__page) {
		transform: none !important;
		background-color: grey !important;
	}

	:global(.splide__pagination__page.is-active) {
		background-color: white !important;
		opacity: 1 !important;
	}

	:global(.splide__pagination) {
		bottom: 3px;
	}
</style>
