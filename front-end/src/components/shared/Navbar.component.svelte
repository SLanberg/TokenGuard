<script lang="ts">
	import logo_nav from '$lib/images/icons/logo_nav.svg';
	import ton from '$lib/images/icons/ton.svg';
	import avatar from '$lib/images/avatar_picture.gif';
	import arrow_down from '$lib/images/icons/arrow_down.svg';
	import { logOutRequest } from '../../routes/casino/casino.js';
	import { onMount } from 'svelte';

	let isOpen = false;
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	$: isProfileDropdown = isOpen ? 'bg-[#0d1316]' : '';

	function handleOutsideClick(event: MouseEvent) {
		if (!(event.target instanceof HTMLElement && event.target.closest('.profile-dropdown'))) {
			isOpen = false;
		}
	}

	// Add event listener for clicks on document
	// to close dropdown when clicking outside
	onMount(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<nav class="bg-black">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-12 items-center justify-between">
			<div
				class="absolute inset-y-0 left-3 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 h-full"
			>
				<div class="flex flex-shrink-0 items-start">
					<img class="h-8 w-auto" src={logo_nav} alt="logo" />
				</div>
			</div>

			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 h-full"
			>
				<div class="flex items-center">
					<img alt="currency symbol" src={ton} class="mr-1" />
					<p class="text-gold-main">10,000.00 TON</p>
				</div>

				<!-- Profile dropdown -->
				<button on:click|preventDefault={toggleDropdown}>
					<div
						class="p-2 ml-1 flex items-center hover:bg-[#0d1316] h-full profile-dropdown {isProfileDropdown}"
					>
						<img class="h-8 w-8 rounded-full" src={avatar} alt="Profile avatar" />
						<img class="h-1 w-1 rounded-full ml-1" src={arrow_down} alt="" />
					</div>
				</button>

				<div class="relative ml-3">
					{#if isOpen}
						<div
							class="absolute right-3 z-10 mt-4 w-48 origin-top-right bg-[#0d1316] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d] rounded-tl-[8px]"
								role="menuitem">Cashier</a
							>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d]"
								role="menuitem">Account</a
							>
							<a
									href="/secure-access"
									class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d]"
									role="menuitem">Secret Key</a
							>
							<a
								on:click={logOutRequest}
								href="/"
								class="block px-4 py-2 text-sm text-gold-secondary hover:bg-[#1f292d] rounded-b-[8px]"
								role="menuitem">Sign Out</a
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>