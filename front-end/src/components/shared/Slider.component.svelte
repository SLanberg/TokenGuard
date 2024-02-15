<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';

	export let label: string = 'not-set';
	export let slides: number[] = [];

	// Importing images
	import arrow_left from '$lib/images/icons/arrow-left.svg';
	import arrow_right from '$lib/images/icons/arrow-right.svg';
	import cards from '$lib/images/icons/cards.svg';
</script>

<div class="h-fit rounded-[8px] w-full sm:w-full">
	<Splide hasTrack={false} options={{
    perPage: 4,
    perMove: 1,
    gap: 8,
    arrows: true,
    pagination: false,
    breakpoints: {
      400: { perPage: 3 },
      330: { perPage: 2 }
    }
  }}>
		<div class="w-full flex justify-between items-center text-left">
			<span class="font-bold text-gold-secondary">{label}</span>
			<div class="splide__arrows">
				<button class="splide__arrow--prev disabled:opacity-35 duration-75"><img class="h-6" alt="vault" src={arrow_left} /></button>
				<button class="splide__arrow--next disabled:opacity-35 duration-75"><img class="h-6" alt="vault" src={arrow_right} /></button>
			</div>
		</div>
		<SplideTrack>
			{#each slides as slide}
				<SplideSlide>
					<div class="bg-[#13181c] w-full sm:w-full aspect-[1/1] overflow-auto rounded-[8px] border border-[#292d30] flex flex-col justify-center items-center">
						<img class="h-12 mb-2" alt="card" src={cards} />
					</div>
				</SplideSlide>
			{/each}
		</SplideTrack>
	</Splide>
</div>
