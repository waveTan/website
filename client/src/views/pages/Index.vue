<template>
	<div class="page">
		<HeaderMeta title="page.index.pageTitle" />
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<Mission />
		<SectionFloatingCubes />
		<HowItWorks />
		<Architecture />
		<Download />
		<Roadmap />
		<Papers />
		<LatestHappenings />
	</div>
</template>

<script>
	import Header from '@/views/pages/index/Header';
	import Mission from '@/views/pages/index/Mission';
	import HowItWorks from '@/views/pages/index/HowItWorks';
	import Architecture from '@/views/pages/index/Architecture';
	import Download from '@/views/pages/index/Download';
	import Roadmap from '@/views/pages/index/Roadmap';
	import SectionFloatingCubes from '@/components/SectionFloatingCubes';
	import LatestHappenings from '@/views/pages/index/LatestHappenings';
	import Papers from '@/views/pages/index/Papers';

	export default {
		components: {
			Header,
			Mission,
			HowItWorks,
			Architecture,
			Download,
			Roadmap,
			SectionFloatingCubes,
			LatestHappenings,
			Papers
		}
	};
</script>

<style scoped>
	.fa-linode {
		font-size: 50px;
	}
</style>
