<template>
	<div>
		<Rectangles :clipBackground="clipBackground" :whiteBackground="whiteBackground">
			<Navigation :whiteBackground="whiteBackground">
				<slot />
			</Navigation>
		</Rectangles>
	</div>
</template>

<script>
	import Rectangles from '@/views/layout/main/Rectangles';
	import Navigation from '@/views/layout/main/Navigation';

	export default {
		components: {
			Rectangles,
			Navigation
		},
		props: {
			clipBackground: {
				type: Boolean,
				default: true
			},
			whiteBackground: {
				type: Boolean,
				default: false
			}
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
