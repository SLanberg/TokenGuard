<script lang="ts">
	import roulette_icon from '$lib/images/roulette_icon.svg';

	let spinning = false;

	function toggleRotation() {
		if (!spinning) {
			spinning = true;
			setTimeout(() => {
				spinning = false;
			}, 1000);
		}
	}
</script>

<div role="complementary" on:mouseenter={toggleRotation}>
	<img class={spinning ? 'spin-animation' : ''} src={roulette_icon} alt="Roulette wheel" />
</div>

<style>
	.spin-animation {
		animation-duration: 1s;
		animation-name: spin;
	}
	@keyframes spin {
		100% {
			transform: rotate(1080deg);
		}
	}
</style>
