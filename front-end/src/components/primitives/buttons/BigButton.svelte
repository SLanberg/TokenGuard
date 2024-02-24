<script lang="ts">
	import { loadingStore } from '../../../stores/loadingStore';

	export let label: string = 'label-not-set';
</script>

<button
	disabled={$loadingStore}
	type="submit"
	on:click
	on:transitionend

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

	enabled:transition
	enabled:transform
	enabled:duration-500

	disabled:transition
	disabled:transform
	disabled:duration-200
	disabled:translate-y-0.5

	ease
	relative
	overflow-hidden
	shadow-2xl

	hover:duration-500
	hover:shadow-gold-secondary/10"
>
	<span class="relative">{label}</span>
</button>
