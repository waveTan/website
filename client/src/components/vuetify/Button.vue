<template>
	<v-btn class="button" round><slot /></v-btn>
</template>

<style scoped>
	.button {
		background-image: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
		border-radius: 70px;
		padding: 0 28px;
		font-size: 14px;
		color: #fff;
		text-transform: none;
	}
</style>
