<template>
	<div class="page">
		<Header />
		<HeaderMeta title="home.title" />
		<Mission />
		<HowItWorks />
		<Architecture />
		<Download />
		<p>To get started, edit files in <code>./client</code> and save.</p>
		<SwitchLanguage />
	</div>
</template>

<script>
	import SwitchLanguage from '@/components/SwitchLanguage';
	import Header from '@/views/pages/Index/Header';
	import Mission from '@/views/pages/Index/Mission';
	import HowItWorks from '@/views/pages/Index/HowItWorks';
	import Architecture from '@/views/pages/Index/Architecture';
	import Download from '@/views/pages/Index/Download';

	export default {
		components: {
			SwitchLanguage,
			Header,
			Mission,
			HowItWorks,
			Architecture,
			Download
		}
	};
</script>

<style scoped>
	.fa-linode {
		font-size: 50px;
	}
</style>
