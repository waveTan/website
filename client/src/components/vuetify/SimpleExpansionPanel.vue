<template>
	<v-expansion-panel-content>
		<div slot="header">
			<I18N :id="title" :vars="titleVars" />
		</div>
		<v-card>
			<v-card-text v-if="subTitle" class="subheader">
				<I18N :id="subTitle" />
			</v-card-text>
			<v-card-text>
				<slot></slot>
			</v-card-text>
			<v-card-text v-if="footer" class="footer">
				<I18N :id="footer" />
			</v-card-text>
		</v-card>
	</v-expansion-panel-content>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			titleVars: {
				type: Object
			},
			subTitle: {
				type: String
			},
			footer: {
				type: String
			}
		}
	};
</script>

<style scoped>
	.subheader,
	.footer {
		opacity: 0.6;
	}
</style>
