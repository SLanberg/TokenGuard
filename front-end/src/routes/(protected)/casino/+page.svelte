<script lang="ts">
	import ton from '$lib/images/icons/ton.svg';
	import info from '$lib/images/icons/info.svg';

	import chest from '$lib/images/icons/chest.svg';

	import video from '$lib/images/hero/genie.mp4';
	import title from '$lib/images/hero/genie x pixies.png';
	import game2 from '$lib/images/hero/casino-promo.jpg';
	import game3 from '$lib/images/hero/Boss Bear.jpg';

	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import Navbar from '../../../components/shared/Navbar.component.svelte';
	import Slider from '../../../components/shared/Slider.component.svelte';

	import { onMount } from 'svelte';
	import { initFlowbite } from 'flowbite';

	import { page } from '$app/stores';

	const numberOfSlides = 16;
	const slides = Array.from({ length: numberOfSlides }, (_, index) => index);


	/*
	TODO: This in a big project should be stored in the cloud


	 */

	const slidesData = [
		{ type: 'video', source: video, alt: 'Hero' },
		{ type: 'image', source: game2, alt: 'Game' },
		{ type: 'image', source: game3, alt: 'Game' }
	];

	// There is easier and better alternatives than Flowbite
	// For example can be used https://atomiks.github.io/tippyjs/v6/getting-started/
	// https://learn.svelte.dev/tutorial/adding-parameters-to-actions
	onMount(() => {
		initFlowbite();
	});

</script>

<svelte:head>
	<title>Casino | Whale</title>
</svelte:head>


{#if $page.data && $page.data.user && $page.data.user.balance}
	<Navbar balance={$page.data.user.balance} />
{/if}

<div class="lg:w-[1000px] w-full flex flex-col items-center justify-center mx-auto">
	<div
		class="bg-[#0C1216] h-[300px] md:h-[400px] mb-5 relative sm:w-full lg:mt-2.5 md:rounded-[8px]"
	>
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
			{#each slidesData as { type, source, alt }}
				<SplideSlide>
					<div class="bg-[#0C1216] h-[300px] md:h-[400px] md:rounded-[8px] mb-5 relative sm:w-full">
						<div class="mx-auto flex justify-between cursor-pointer h-full">
							{#if type === 'video'}
								<video class="object-cover md:rounded-[8px] w-full" height="100%" autoplay loop>
									<source src={source} type="video/mp4" />
									<track
										kind="captions"
										src="path/to/captions.vtt"
										srclang="en"
										label="English captions"
									/>
								</video>
								<img src={title} class="absolute inset-0 mx-auto my-auto" alt="Hero" />
							{:else if type === 'image'}
								<img class="object-cover md:rounded-[8px] w-full" src={source} {alt} />
							{/if}
						</div>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class="bg-[#0C1216] h-fit rounded-[8px] w-full sm:w-full mb-5">
		<div class="mx-auto flex justify-between h-full">
			<div class="flex-1 p-4">
				<div class="flex items-center">
					<p class="text-sm/[12px]">Treasure Hunter's Haul</p>
					<img
						data-tooltip-target="tooltip"
						data-tooltip-trigger="click"
						data-tooltip-placement="top"
						alt="info"
						src={info}
						class="ml-1 cursor-pointer h-3"
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
				<p class="text-sm/[12px] mb-2">Collective Ante</p>
				<div class="flex items-center">
					<img alt="currency symbol" src={ton} class="mr-1 h-4" />
					<p class="text-gold-main font-bold text-sm/[20px]">912,667.59 TON</p>
				</div>
			</div>

			<div class="h-px bg-white/10 self-center"></div>

			<button
				class="flex-1 hover:bg-[#fff]/10 duration-500 hover:rounded-r-[8px] p-4 flex items-center justify-center"
			>
				<img alt="chest" src={chest} class="mr-1" />
			</button>
		</div>
	</div>

	<Slider label="House Exclusives" {slides} />

	<div class="mb-7" />

	<Slider label="Popular Games" {slides} />

	<div class="mb-7" />

	<Slider label="House Top Picks" {slides} />

	<div class="mb-7" />
</div>

<style>
	.h-px {
		content: ' ';
		height: 60px;
		width: 1px;
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
