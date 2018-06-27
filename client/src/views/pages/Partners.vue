<template>
	<div>
		<HeaderMeta title="page.partnerships.pageTitle" />
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<CooperationProjects :items="getItems('cooperation projects')" />
		<CooperationMedia :items="getItems('cooperation media')" />
		<Platforms :items="getItems('platform')" />
		<BecomeAPartner />
	</div>
</template>

<script>
	import Items from '@/views/pages/partners/Items';
	import Header from '@/views/pages/partners/Header';
	import CooperationProjects from '@/views/pages/partners/CooperationProjects';
	import CooperationMedia from '@/views/pages/partners/cooperationMedia';
	import Platforms from '@/views/pages/partners/platforms';
	import BecomeAPartner from '@/views/pages/partners/BecomeAPartner';

	export default {
		components: {
			Items,
			Header,
			CooperationProjects,
			CooperationMedia,
			Platforms,
			BecomeAPartner
		},
		async mounted()
		{
			await this.$store.dispatch('genericEndPoints/loadItems', 'partners');
		},
		data()
		{
			return {
				partnerships: this.$store.getters['genericEndPoints/getItems']('partners'),
			};
		},
		methods: {
			getItems(type)
			{
				if(!this.partnerships) return [];

				return this.partnerships.filter((item) => item.type.toLowerCase() === type);
			}
		}
	};
</script>
