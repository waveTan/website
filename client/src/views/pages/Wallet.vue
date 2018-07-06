<template>
	<div class="page">
		<HeaderMeta title="page.index.pageTitle" />
		<HeaderLayout whiteBackground>
			<Header />
		</HeaderLayout>
		<div class="section">
			<Download :padding="false" />
		</div>
	</div>
</template>

<script>
	import Download from '@/views/pages/index/Download';

	export default {
		components: {
			Download
		}
	};
</script>

<style scoped>
	.section {
		margin-bottom: -390px;
	}
</style>
