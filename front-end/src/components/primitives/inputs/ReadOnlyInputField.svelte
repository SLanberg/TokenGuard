<script lang="ts">
	export let name: string = 'not-set';
	export let value: string | null = null;
	export let id: string = '';
</script>

<label for={id} class="w-fit mt-2.5 flex text-sm text-gray-600">
	{name}
</label>

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
		readonly
		{value}
		{name}
		{id}
		placeholder={name}
		class="block
		rounded-[8px]
		w-[300px]
		p-2.5
		text-sm
		text-white
		outline-none"
	/>
</div>
