<script>
	import { page } from '$app/stores';

	import sadWhaleImage from '$lib/images/sad_whale.png';
	import { goto } from '$app/navigation';

	export async function handleHomeButtonClick() {
		// Do some magic here... ✨
		goto('/', {});
	}
</script>

<!--<h1>An error happened!</h1>-->
<!--<p>Error status: {$page.status}: </p>-->
<!--<p>Error description: {$page.error.message}</p>-->

<div class="flex h-screen">
    <div class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bfc5d9] w-[400px] h-fit rounded-[10px]">
        <div class="px-10">
            <br>
            <p class="text-black text-center">{$page.status}</p>
            <img class="mx-auto my-auto mb-7" id="mascot" src={sadWhaleImage} alt="Whale">
            <p class="text-black text-center">After exploring the deep ocean you didn't find wanted materials.
                It might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div class="flex justify-center">
                <button class="mt-10 mb-10 bg-[#43444A]
                            transition
                            ease-in-out
                            duration-500
                            hover:bg-[#55565b]
                            text-[#BFC5D9]
                            font-bold
                            py-2
                            px-4
                            rounded-[10px]"
                        on:click={handleHomeButtonClick}>
                    Go back to home page
                </button>
            </div>
        </div>
    </div>
</div>