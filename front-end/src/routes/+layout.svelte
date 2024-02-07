<script>
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';

	import { navigating } from '$app/stores';
	import { loading } from './new-design/spinner/loading';
	import Loader from "../components/shared/Loader.component.svelte"

	$: $loading = !!$navigating

	import '../interceptors/axios';
</script>


<Loader />

<Toaster />

<slot />

<style>
	:global(html) {
		background: #13181c;
		color: #ffffff;
		font-family: Prompt, ui-serif;
	}

	:global(a) {
		text-decoration: none;
	}

  @font-face {
      src: url('$lib/fonts/Cinzel/Cinzel-Bold.ttf');
      font-family: 'Cinzel';
  }
  @font-face {
      src: url('$lib/fonts/Prompt/Prompt-Regular.ttf');
      font-family: 'Prompt';
      font-weight: normal;
  }
</style>
