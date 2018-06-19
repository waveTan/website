<template>
	<div class="container">
		<HeaderMeta title="pageNotFound.title" />
		<h1><I18N id="pageNotFound.header" /></h1>
		<h4><I18N id="pageNotFound.subHeader" /></h4>
		<p><I18N id="pageNotFound.content" /></p>
		<v-btn
			color="blue-grey"
			class="white--text"
			@click.native="goHome"
		>
			<I18N id="pageNotFound.goHome" />
		</v-btn>
	</div>
</template>

<script>
	export default {
		methods: {
			goHome()
			{
				this.$router.push({ name: 'home' });
			}
		}
	};
</script>

<style scoped>
	/*.container {*/
	/*height: 100%;*/
	/*background-image: url('/404/dog.jpg');*/
	/*background-position: center;*/
	/*background-repeat: no-repeat;*/
	/*background-size: cover;*/
	/*}*/
</style>
