<template>
	<div>
		<HeaderMeta title="page.jobs.pageTitle" />
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
