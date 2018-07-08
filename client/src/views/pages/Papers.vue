<template>
	<div>
		<HeaderMeta title="page.papers.pageTitle" />
		<Header />
		<Download />
	</div>
</template>

<script>
	import Header from '@/views/pages/papers/Header';
	import Download from '@/views/pages/papers/Download';

	export default {
		components: {
			Header,
			Download
		}
	};
</script>
