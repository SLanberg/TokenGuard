<script>
    import {Toaster} from 'svelte-french-toast';
	import '../app.css';
</script>

<Toaster />

<slot />

<style>
	:global(html) {
		background: linear-gradient(to bottom, #1f232f, #151a26);
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
		src: url('/fonts/Inter-Regular.ttf');
	}
</style>
