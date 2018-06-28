<template>
	<div>
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<HeaderMeta title="page.team.pageTitle" />
		<Developers :items="getItems('developer')" />
		<Community :items="getItems('operation')" />
		<Advisors :items="getItems('advisor')" />
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
		data()
		{
			return {
				ranDispatch: false
			};
		},
		methods: {
			getItems(type)
			{
				if(!this.$store.getters['genericEndPoints/getItems']('team') && !this.ranDispatch)
				{
					this.ranDispatch = true;
					this.$store.dispatch('genericEndPoints/loadItems', 'team');
				}

				if(!this.$store.getters['genericEndPoints/getItems']('team'))
				{
					return [];
				}

				return this.$store.getters['genericEndPoints/getItems']('team').filter((item) => item.category.toLowerCase() === type);
			}
		}
	};
</script>
