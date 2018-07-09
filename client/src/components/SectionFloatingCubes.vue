<template>
	<div class="container">
		<img
			class="cube"
			src="@/assets/images/animations/cube.svg"
			width="350px"
		>
		<img
			class="cubes"
			src="@/assets/images/animations/cubes.svg"
			width="350px"
		>
	</div>
</template>

<style scoped>
	.container {
		z-index: 1;
	}

	.cube {
		float: left;
		margin-top: -80px;
		position: relative;
		z-index: 1;
	}

	.cubes {
		float: right;
		margin-top: -130px;
		position: relative;
		z-index: 1;
	}

	@media screen and (max-width: 650px) {
		img.cube {
			display: none;
		}
	}
</style>
