<template>
	<div>
		<div>
			<HeaderMeta title="page.team.pageTitle" />
			<Header />
			<Developers />
			<Community />
			<Advisors />
		</div>
	</div>
</template>

<script>
	import Header from '@/views/pages/team/Header';
	import Advisors from '@/views/pages/team/Advisors';
	import Community from '@/views/pages/team/Community';
	import Developers from '@/views/pages/team/Developers';

	export default {
		components: {
			Header,
			Advisors,
			Community,
			Developers
		}
	};
</script>
