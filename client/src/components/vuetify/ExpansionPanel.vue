<template>
	<v-expansion-panel>
		<v-expansion-panel-content v-for="(item,i) in 5" :key="i">
			<div slot="header"><slot name="header" /></div>
			<v-card>
				<v-card-text>
					<v-card-text>
						<slot />
					</v-card-text>
					<v-card-text class="footer">
						<slot name="footer" />
					</v-card-text>
				</v-card-text>
			</v-card>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
	export default {
	};
</script>

<style scoped>
	.footer {
		opacity: 0.6;
	}
</style>
