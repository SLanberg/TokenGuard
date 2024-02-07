<script>
	import { page } from '$app/stores';

	import { goto } from '$app/navigation';

	export const handleHomeButtonClick = async () => {
		await goto('/', {});
	};

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

<div class="flex h-screen">
	<div
		class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bfc5d9] w-[400px] h-fit rounded-[10px]"
	>
		<div class="px-10">
			<br />
			<p class="text-black text-center">{errorCode}</p>
			<p class="text-black text-center">{errorMessage}</p>
			<div class="flex justify-center">
				<button
					class="mt-10 mb-10 bg-[#43444A]
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-[#55565b]
                            text-[#BFC5D9]
                            font-bold
                            py-2
                            px-4
                            rounded-[10px]"
					on:click={handleHomeButtonClick}
				>
					Go back to home page
				</button>
			</div>
		</div>
	</div>
</div>
