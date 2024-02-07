<script>
	import W from '$lib/images/logo.svg';
</script>

<div class="spinner-section ready-to-play">
	<div class="spinner">
		<img id="spinner-img" src={W} alt="logo" />
	</div>
</div>

<style>
	.spinner-section {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.spinner-section.ready-to-play {
		pointer-events: none;
		animation: hide-spinner 1s forwards; /* Add hide-spinner animation with a 1-second delay */
	}

	@keyframes hide-spinner {
		/*to {*/
		/*    opacity: 0;*/
		/*}*/
	}

	.spinner {
		width: 86px;
		height: 86px;
		border-radius: 50%;
		border: 10px solid #01000741;
		position: relative;
		z-index: 1;
	}

	.spinner:before {
		content: '';
		width: 86px;
		height: 86px;
		border-radius: 50%;
		border-top: 10px solid #e7a73e;
		border-right: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 10px solid transparent;
		position: absolute;
		z-index: 9;
		top: -10px;
		left: -10px;
		animation: rt 2s infinite;
	}

	@keyframes rt {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.spinner > img {
		height: 100%;
		text-align: center;
		display: block;
	}
</style>
