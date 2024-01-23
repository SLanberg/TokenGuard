<script>
	import '../app.css';
</script>

<slot />

<style>
	:global(body) {
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
		/*font-weight: 100;*/
		src: url('../static/fonts/Inter-Regular.ttf');
	}
</style>
