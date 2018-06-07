<template>
	<div>
		<Rectangles />
		<Navigation />
	</div>
</template>

<script>
	import Rectangles from '@/views/layout/main/Rectangles';
	import Navigation from '@/views/layout/main/Navigation';

	export default {
		components: {
			Rectangles,
			Navigation
		}
	};
</script>

<style scoped>
	.container {
		display: inherit;
		width: 100%;
		margin: 0;
	}

	.headerLink {
		color: inherit;
		text-decoration: none;
	}
</style>
