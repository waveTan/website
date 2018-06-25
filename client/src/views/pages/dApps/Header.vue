<template>
	<div class="header">
		<div class="container">
			<h1><I18N id="page.dApps.header.title" /></h1>
			<p class="centered"><I18N id="page.dApps.header.meta" /></p>
			<div class="centered"><Button><I18N id="page.dApps.header.create" /></Button></div>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		}
	}
</script>

<style scoped>
	.header .container p {
		padding-bottom: 0;
	}
</style>
