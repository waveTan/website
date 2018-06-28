<template>
	<div>
		<HeaderMeta title="page.join.pageTitle" />
		<HeaderLayout :whiteBackground="true" />
		<Header />
		<JobsBoard />
	</div>
</template>

<script>
	import Header from '@/views/pages/join/Header';
	import JobsBoard from '@/views/pages/join/JobsBoard';

	export default {
		components: {
			Header,
			JobsBoard
		}
	}
</script>
