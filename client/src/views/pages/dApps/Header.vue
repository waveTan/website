<template>
	<div class="header">
		<div class="container">
			<h1><I18N id="page.dApps.header.title" /></h1>
			<p class="centered"><I18N id="page.dApps.header.meta" /></p>
			<div class="centered">
				<Button
					:onClick="open"
					colour="transparent"
					textClass="white"
				>
					<I18N id="page.dApps.header.create"/>
				</Button>
			</div>
		</div>
		<Dialog v-if="dialog" :open="dialog">
			<div>
				<I18N id="page.dApps.header.createSoon" />
			</div>
		</Dialog>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';
	import Dialog from '@/components/vuetify/Dialog';

	export default {
		components: {
			Button,
			Dialog
		},
		data()
		{
			return {
				dialog: null
			};
		},
		methods: {
			open()
			{
				this.dialog = null; // This turns it off so it detects a change
				this.$nextTick(() => (this.dialog = true));
			}
		}
	};
</script>

<style scoped>
	.header .container p {
		padding-bottom: 0;
	}
</style>
