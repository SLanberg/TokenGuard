<script>
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';

	import { navigating } from '$app/stores';
	import { loadingStore } from '../stores/loadingStore';
	import Loader from '../components/shared/Loader.component.svelte';

	$: $loadingStore = !!$navigating;

	import '../interceptors/axios';
</script>

<Loader />

<Toaster />

<slot />

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
	:global(html) {
		background: #13181c;
		color: #ffffff;
		font-family: Prompt, ui-serif;
	}
	:global(a) {
		text-decoration: none;
	}
	:global(*) {
		font-family: 'Prompt', serif;
	}
	:global(h1) {
		font-size: 32px;
		font-weight: 900;
		line-height: 43px;
		letter-spacing: 0.21em;
		color: hsl(35, 100%, 80%);
		font-family: 'Cinzel', serif;
	}
	:global(h2) {
		font-size: 26px;
		font-weight: 500;
		line-height: 43px;
		letter-spacing: 0.04em;
		color: hsl(43, 24%, 51%);
		font-family: 'Cinzel', serif;
	}
	:global(p) {
		font-size: 12px;
		font-family: 'Prompt', serif;
	}
	:global(input) {
		padding-left: 15px;
		background: none;
	}
	:global(.left-to-right) {
		background: linear-gradient(to right, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}
	:global(.right-to-left) {
		background: linear-gradient(to left, hsl(200, 6%, 17%), hsl(35, 100%, 80%));
	}
</style>
