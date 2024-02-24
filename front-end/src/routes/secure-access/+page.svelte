<script lang="ts">
	import InputField from '../../components/primitives/inputs/InputField.component.svelte';
	import keyFrame from '$lib/images/icons/key_frame.svg';
	import BigButton from '../../components/primitives/buttons/BigButton.svelte';

	import { enhance } from '$app/forms';
	import { loadingStore } from '../../stores/loadingStore';
	import { goto } from '$app/navigation';
	import { secretKeyParam } from '../../stores/secureAccessStore';
	import { popUpStateLogin } from '../../stores/loginStore';
	import { logOutRequest } from '../casino/script';
</script>

<svelte:head>
	<title>Security Check | Whale</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
	<div class="text-center">
		<h1>Whale</h1>

		<div class="border-gold-main border-2 rounded-[24px] w-fit h-fit pl-5 pr-5 pt-5">
			<div class="flex items-center justify-between">
				<div class="flex-grow h-px left-to-right"></div>

				<div class="logo-container mx-3">
					<img src={keyFrame} alt="key frame icon" />
				</div>

				<div class="flex-grow h-px right-to-left"></div>
			</div>

			<h2 class="mb-4 mt-1">Vault</h2>

			<form
				method="POST"
				action="?/getSecretKey"
				use:enhance={() => {
					$loadingStore = true;
					return async ({ result }) => {
						if (result.type === 'success') {
							if (result && result.data) {
								secretKeyParam.update((store) => {
									if (result && result.data) {
										if (typeof result.data.secretKey === 'number') {
											store.secretKey = result.data.secretKey.toString();
										}
									}

									return store;
								});

								$loadingStore = false;
								return await goto('/secret-key', {});
							}
						} else {
							$loadingStore = false;
							popUpStateLogin.update(() => ({ showPopUp: true }));

							await logOutRequest();
							return await goto('/', {});
						}
					};
				}}
			>
				<div class="container mx-auto pt-5 w-[300px]">
					<InputField name="Access Token" id="accessToken" />
				</div>
				<BigButton label="Submit" />
			</form>

			<div class="mb-20"></div>
		</div>
	</div>
</div>

<style>
</style>
