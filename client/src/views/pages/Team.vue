<template>
	<div>
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<HeaderMeta title="page.team.pageTitle" />
		<Developers />
		<Community />
		<Advisors />
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
