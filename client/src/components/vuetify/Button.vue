<template>
	<v-btn class="button" :class="colour" round>
		<slot />
		<img v-if="icon" :src="`/static/images/icons/${icon}.png`" alt="" class="arrow" />
	</v-btn>
</template>

<script>
	export default {
		props: {
			colour: {
				type: String,
				default: 'green'
			},
			icon: {
				type: [String, Boolean],
				default: false
			}
		}
	}
</script>

<style>
	.button {
		font-size: 18px;
		color: #fff;
		text-transform: none;
		height: 55px;
	}

	.btn__content {
		background: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
		padding: 0 28px;
		font-size: 18px;
		color: #fff;
		text-transform: none;
		height: 55px;
	}

	button:hover {
		background: #56c400;
		opacity: 0.7;
	}

	.button.blue .btn__content {
		background: #031b47;
		border: 1px solid #fff;
	}

	.button img {
		margin-left: 12px;
	}
</style>
