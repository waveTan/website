<template>
	<div>
		<HeaderMeta title="pageNotFound.title" />
		<HeaderLayout>
			<Header />
		</HeaderLayout>
		<div class="section container">
			<h1><I18N id="pageNotFound.header" /></h1>
			<h4><I18N id="pageNotFound.subHeader" /></h4>
			<p><I18N id="pageNotFound.content" /></p>
			<Button routeLink="home">
				<I18N id="pageNotFound.goHome" />
			</Button>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
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
