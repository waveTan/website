<template>
	<HeaderLayout>
		<div class="header">
			<div class="container">
				<h1><I18N id="page.papers.header.title" /></h1>
				<p class="centered"><I18N id="page.papers.header.meta" /></p>
				<div class="images">
					<img
						class="slabs"
						:src="cube"
						width="300px"
					>
					<img
						class="cubes"
						:src="cubes"
						width="350px"
					>
					<br style="clear: both; "/>
				</div>
			</div>
		</div>
	</HeaderLayout>
</template>

<script>
	import { detect } from 'detect-browser';

	export default {
		data()
		{
			const browserExt = detect().name === 'firefox' ? '-ff' : '';

			return {
				cube: require(`@/assets/images/animations/1cube${browserExt}.svg`),
				cubes: require(`@/assets/images/animations/2cubes${browserExt}.svg`)
			};
		}
	};
</script>

<style scoped>
	.images {
		margin-top: -130px;
	}

	img.slabs {
		float: right;
	}

	img.cubes {
		float: left;
	}
</style>
