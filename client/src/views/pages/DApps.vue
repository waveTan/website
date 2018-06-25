<template>
	<div>
		<HeaderMeta title="page.dApps.pageTitle" />
		<Header />
		<Items />
	</div>
</template>

<script>
	import Header from '@/views/pages/dApps/Header';
	import Items from '@/views/pages/dApps/Items';

	export default {
		components: {
			Header,
			Items
		}
	};
</script>

<style scoped>
</style>
