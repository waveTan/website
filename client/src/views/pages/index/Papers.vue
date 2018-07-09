<template>
	<div class="container">
		<h3><I18N id="page.index.papers.title" /></h3>
		<Download />
	</div>
</template>

<script>
	import Download from '@/views/pages/papers/Download';

	export default {
		components: {
			Download
		}
	};
</script>
