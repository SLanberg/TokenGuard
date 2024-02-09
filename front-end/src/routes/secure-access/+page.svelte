<script lang="ts">
	import { tokenSubmitRequest } from './secure-access';
	import { handleLoadEventsSecureAccess } from '../../stores/secureAccessStore';
	import Loader from '../../components/shared/Loader.component.svelte';
</script>

<div class="flex h-screen">
	<div
		class="m-auto h-[500px] w-[500px] rounded-[10px] bg-[#2e2e3e] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
	>
		<form on:submit|preventDefault={tokenSubmitRequest}>
			<div class="m-auto w-fit">
				<label class="text-left text-sm font-medium text-[#B8B8B8]" for="accessToken"
					>Access Token</label
				>
				<br />
				<input
					class="mb-5
					block
					w-[300px]
					rounded-[10px]
					border
					border-gray-600
					bg-[#13161E]
					p-2.5
					text-sm
					text-white
					placeholder-gray-400
					outline-none
					focus:border-[#5a70ec]
					focus:ring-[#5a70ec]"
					type="text"
					name="accessToken"
					id="accessToken"
					required
				/>
				<button
					class="mb-10
							w-[300px]
							rounded-[10px]
							bg-[#43444A]
							px-4
							py-2
							font-bold
							text-white
							transition
							duration-500
							ease-in-out
							hover:bg-[#55565b]
							flex
							justify-center
							align-middle"
				>
					Submit
					{#if $handleLoadEventsSecureAccess.secretKeyLoad}
						<Loader />
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>

<style>
</style>
