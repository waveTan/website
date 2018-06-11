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
			},
			textStyle: {
				type: String,
				default: ''
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

	.button.white .btn__content {
		opacity: 0.8;
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 100px;
		color: #56c400;
	}

	.button.transparent .btn__content {
		background: none;
		box-shadow: none;
		color: #445569;
	}

	.btn:not(.btn--depressed) {
		box-shadow: none;
	}

	.button img {
		margin-left: 12px;
	}
</style>
