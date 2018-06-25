<template>
	<div class="section container">
		<div class="centered">
			<h2>Hello world</h2>
			<p>{{ getItems('platform') }}</p>
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
				console.log(this.partnerships);
				return this.partnerships.filter((item) => item.type.toLowerCase() === type);
			}
		}
	};
</script>

<style scoped>
</style>
