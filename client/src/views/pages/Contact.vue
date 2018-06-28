<template>
	<div>
		<HeaderMeta title="page.jobs.pageTitle" />
		<HeaderLayout :whiteBackground="true" />
		<Header />
		<HereToHelp />
		<Form />
	</div>
</template>

<script>
	import Header from '@/views/pages/contact/Header';
	import HereToHelp from '@/views/pages/contact/HereToHelp';
	import Form from '@/views/pages/contact/Form';

	export default {
		components: {
			Header,
			HereToHelp,
			Form
		}
	}
</script>
