<script lang="ts">
	export let label: string = 'label-not-set';
</script>

<button
	type="submit"
	on:click
	class="w-[300px]
	rounded-[8px]
	px-4
	py-2
	text-white
	transition
	duration-500
	ease-in-out
	flex
	justify-center
	align-middle
	bg-gradient-to-r
	from-gold-dark
	to-gold-lighter-dark
	before:ease
	relative
	overflow-hidden
	shadow-2xl
	before:duration-500
	hover:before:translate-x-80
	hover:shadow-gold-secondary/10

"
>
	<span class="relative">{label}</span>
</button>
