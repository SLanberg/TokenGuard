<script>
	import {Toaster} from 'svelte-french-toast';
	import '../app.css';

    import '../interceptors/axios.ts';
</script>

<Toaster />

<slot />

<style>
	:global(html) {
		background: #13181C;
		color: #ffffff;
		font-family: Inter, ui-serif;
	}

	:global(a) {
		text-decoration: none;
		color: white;
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		src: url('/fonts/Inter/Inter-Regular.ttf');
	}
</style>
