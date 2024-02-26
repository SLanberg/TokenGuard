<script lang="ts">
	import attention_sign from '$lib/images/Info_triangle.png';

	export let message: string = '';
</script>

<div class="w-fit -mt-2.5 mb-2.5">
	<span class="text-red-600 text-xs inline-block">
		<img class="h-3 mr-0.5 inline" src={attention_sign} alt="error-sign" />
		{message}
	</span>
</div>
