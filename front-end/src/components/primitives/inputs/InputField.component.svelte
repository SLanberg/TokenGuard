<script lang="ts">
	import { fieldsValidationSignIn } from '../../../stores/loginStore';
	import attention_sign from '$lib/images/Info-triangle.png';

	export let name: string = 'not-set';
</script>

<div
	class="flex
	items-center
	mb-3
	bg-background-color
	rounded-[8px]
	border
	border-transparent
	hover:border-gold-third
	focus-within:border-gold-main
	focus-within:hover:border-gold-main"
>
	<input
		required
		{name}
		id={name}
		placeholder={name}
		class="block rounded-[8px] w-[300px] p-2.5 text-sm text-white placeholder-input-color outline-none"
	/>
</div>

{#if $fieldsValidationSignIn.telegramId.error}
	<div
		class="flex
	items-center
	w-fit
	-mt-2.5
	mb-2.5"
	>
		<img class="h-3 mr-0.5" src={attention_sign} alt="error-sign" />
		<span class="text-red-600 text-xs">TelegramID or Password is incorrect</span>
	</div>
{/if}
