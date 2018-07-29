<template>
	<div>
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<HeaderMeta title="page.team.pageTitle" />
		<div v-if="pageLoading" class="section container">
			<div class="centered">
				<v-progress-circular class="centered" :size="50" indeterminate color="primary" />
			</div>
		</div>
		<div v-else>
			<Developers v-if="getItems('developer')" :items="getItems('developer')" />
			<Community v-if="getItems('operation')" :items="getItems('operation')" />
			<Advisors v-if="getItems('advisor')" :items="getItems('advisor')" />
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
		},
		computed: {
			pageLoading()
			{
				return this.$store.getters['app/pageLoading'];
			}
		},
		methods: {
			getItems(type)
			{
				if(!this.$store.getters['items/getItems']('team'))
				{
					this.$store.dispatch('items/loadItems', 'team');

					return false;
				}

				const members = this.$store.getters['items/getItems']('team').filter((item) => item.category.toLowerCase() === type);

				return members.length !== 0 ? members : false;
			}
		}
	};
</script>
