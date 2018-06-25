<template>
	<div>
		<div class="header">
			<div class="container">
				<h1><I18N id="page.partnerships.header.title" /></h1>
				<p class="centered"><I18N id="page.partnerships.header.meta" /></p>
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.cooperationProjects" /></h2>
				<Items :items="getItems('cooperation projects')" />
			</div>
		</div>
		<div class="section grey">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.cooperationMedia" /></h2>
				<Items :items="getItems('cooperation media')" :container="true" />
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.platforms" /></h2>
				<Items :items="getItems('platform')" />
			</div>
		</div>
		<div class="section grey noClip">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.becomeAPartner.title" /></h2>
				<p></p>
			</div>
		</div>
	</div>
</template>


<script>
	import Items from '@/views/pages/partners/Items';

	export default {
		components: {
			Items
		},
		async mounted()
		{
			await this.$store.dispatch('strapi/loadItems', 'nulsPartners');
		},
		data()
		{
			return {
				partnerships: this.$store.getters['strapi/getItems']('nulsPartners')
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

<style scoped>
</style>
