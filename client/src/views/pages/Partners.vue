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
				<p>{{ getItems('cooperation projects') }}</p>
			</div>
		</div>
		<div class="section grey">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.cooperationMedia" /></h2>
				<p>{{ getItems('cooperation media') }}</p>
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.platforms" /></h2>
				<p>{{ getItems('platform') }}</p>
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
	export default {
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
				return this.partnerships.filter((item) => item.type.toLowerCase() === type);
			}
		}
	};
</script>

<style scoped>
</style>
