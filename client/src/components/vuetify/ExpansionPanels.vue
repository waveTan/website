<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-expansion-panel popout>
					<v-expansion-panel-content v-for="(item, i) in items" :key="i">
						<div slot="header">
							<I18N :id="item.title" />
						</div>
						<v-card>
							<v-card-text v-if="item.subTitle" class="subheader">
								<I18N :id="item.subTitle" />
							</v-card-text>
							<v-card-text>
								<I18N :id="item.content" />
							</v-card-text>
							<v-card-text v-if="item.footer" class="footer">
								<I18N :id="item.footer" />
							</v-card-text>
						</v-card>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				required: true
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
