<template>
	<div class="section container">
		<div class="centered">
			<h2>Hello world</h2>
			<p>Foo bar</p>
		</div>
	</div>
</template>


<script>
	export default {
		async mounted()
		{
			await this.$store.dispatch('strapi/loadItems', 'nulsPartners');
		}
	};
</script>

<style scoped>
</style>
