<template>
	<v-btn class="button" round><slot /></v-btn>
</template>

<style scoped>
	.button {
		background-image: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
		border-radius: 70px;
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
</style>
