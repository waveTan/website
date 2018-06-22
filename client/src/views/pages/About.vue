<template>
	<div class="page">
		<HeaderMeta title="page.about.pageTitle" />
		<Header />
		<Information />
		<GitHub />
		<FAQ />
	</div>
</template>

<script>
	import Header from '@/views/pages/about/Header';
	import Information from '@/views/pages/about/Information';
	import GitHub from '@/views/pages/about/GitHub';
	import FAQ from '@/views/pages/about/FAQ';

	export default {
		components: {
			Header,
			Information,
			GitHub,
			FAQ
		}
	};
</script>

<style scoped>

</style>
