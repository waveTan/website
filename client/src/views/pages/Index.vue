<template>
	<div class="page">
		<HeaderMeta title="page.index.pageTitle" />
		<Header />
		<Mission />
		<SectionFloatingCubes />
		<HowItWorks />
		<Architecture />
		<Download />
		<Roadmap />
		<LatestHappenings />
	</div>
</template>

<script>
	import Header from '@/views/pages/Index/Header';
	import Mission from '@/views/pages/Index/Mission';
	import HowItWorks from '@/views/pages/Index/HowItWorks';
	import Architecture from '@/views/pages/Index/Architecture';
	import Download from '@/views/pages/Index/Download';
	import Roadmap from '@/views/pages/Index/Roadmap';
	import SectionFloatingCubes from '@/components/SectionFloatingCubes';
	import LatestHappenings from '@/views/pages/Index/LatestHappenings';

	export default {
		components: {
			Header,
			Mission,
			HowItWorks,
			Architecture,
			Download,
			Roadmap,
			SectionFloatingCubes,
			LatestHappenings
		}
	};
</script>

<style scoped>
	.fa-linode {
		font-size: 50px;
	}
</style>
