<template>
	<div class="container">
		<img
			class="cube"
			:src="cube"
			width="350px"
		>
		<img
			class="cubes"
			:src="cubes"
			width="350px"
		>
	</div>
</template>

<script>
	import { detect } from 'detect-browser';

	export default {
		data()
		{
			const browserExt = detect().name === 'firefox' ? '-ff' : '';

			return {
				cube: require(`@/assets/images/animations/cube${browserExt}.svg`),
				cubes: require(`@/assets/images/animations/cubes${browserExt}.svg`)
			};
		}
	};
</script>

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

		.container {
			margin-left: 70px;
		}
	}
</style>
