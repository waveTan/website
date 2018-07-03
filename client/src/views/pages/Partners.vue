<template>
	<div>
		<HeaderMeta title="page.partnerships.pageTitle" />
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<div v-if="pageLoading" class="section container">
			<div class="centered">
				<v-progress-circular class="centered" :size="50" indeterminate color="primary" />
			</div>
		</div>
		<div v-else>
			<CooperationProjects :items="getItems('cooperation projects')" />
			<CooperationMedia :items="getItems('cooperation media')" />
			<Platforms :items="getItems('platform')" />
		</div>
		<BecomeAPartner />
	</div>
</template>

<script>
	import Items from '@/views/pages/partners/Items';
	import Header from '@/views/pages/partners/Header';
	import CooperationProjects from '@/views/pages/partners/CooperationProjects';
	import CooperationMedia from '@/views/pages/partners/CooperationMedia';
	import Platforms from '@/views/pages/partners/Platforms';
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
		computed: {
			partnerships()
			{
				if(!this.$store.getters['items/getItems']('partners'))
				{
					this.$store.dispatch('items/loadItems', 'partners');
				}

				return this.$store.getters['items/getItems']('partners');
			},
			pageLoading()
			{
				return this.$store.getters['app/pageLoading'];
			}
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
