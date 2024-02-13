<script>
	import { page } from '$app/stores';

	let errorCode = '';
	let errorMessage = '';

	if ($page.status === 404) {
		errorCode = '404'; // Convert to string
		errorMessage =
			"After exploring the deep ocean you didn't find wanted materials.\n" +
			'                It might have been removed, had its name changed, or is temporarily unavailable.';
	} else {
		errorCode = '';
		errorMessage = 'Something unexpected happened';
	}
</script>

<div class="flex justify-center items-center h-screen">
	<div class="text-center">
		<p class="text-4xl font-bold">{errorCode}</p>
		<p class="w-[300px]">{errorMessage}</p>
	</div>
</div>
