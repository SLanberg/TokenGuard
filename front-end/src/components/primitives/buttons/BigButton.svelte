<script lang="ts">
	import { loadingStore } from '../../../stores/loadingStore';

	export let label: string = 'label-not-set';
</script>

<button
	disabled={$loadingStore}
	type="submit"
	on:click
	class="w-[300px]
	rounded-[8px]
	px-4
	py-2
	text-white
	transition
	transform
	ease-in-out
	flex
	justify-center
	align-middle
  bg-gradient-to-r
	from-gold-dark
	to-gold-lighter-dark
	ease
	relative
	overflow-hidden
	shadow-2xl
	hover:duration-500
	hover:shadow-gold-secondary/10"
>
	<span class="relative">{label}</span>
</button>
