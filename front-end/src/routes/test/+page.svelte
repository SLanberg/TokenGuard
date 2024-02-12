<script lang="ts">
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import { onMount } from "svelte";
	import "@splidejs/svelte-splide/css";
	import { afterUpdate } from "svelte"; // Import afterUpdate





	// set up placeholder images
	let images: string[] = [];
	const url: string = "https://picsum.photos/800/450?random=";

	for (let i = 1; i <= 10; i++) {
		images.push(url + i);
	}

	// set up carousel config
	const mainOptions = {
		pagination: true,
		type: "loop",
	};

	// sync carousels
	// Define types for main and thumbs
	let main: Splide | null = null; // Assuming main is a Splide instance or null
	let thumbs: Splide | null = null; // Assuming thumbs is a Splide instance or null

	// Use afterUpdate instead of onMount
	afterUpdate(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide);
		}
	});

	onMount(() => {

	});
</script>

<div class="gallery">
	<div class="gallery--main">
		<Splide
			bind:this={main}
			options={ mainOptions }
		>
			{#each images as imageSrc}
				<SplideSlide>
					<img src={imageSrc} alt="desc" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>

<style>
    .gallery {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        margin: 0 auto;
        max-width: 960px;
        min-height: 100vh;
    }

    /* Apply custom styles to pagination dots */
    .splide__pagination :global(.splide__pagination__page.is-active) {
        background-color: blue;
    }
</style>
