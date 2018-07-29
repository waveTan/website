<template>
	<div class="expansionPanel">
		<v-expansion-panel-content>
			<div slot="header" class="header"><slot name="header" /></div>
			<v-card>
				<v-card-text>
					<v-card-text class="content">
						<slot />
					</v-card-text>
					<v-card-text class="footer">
						<slot name="footer" />
					</v-card-text>
				</v-card-text>
			</v-card>
		</v-expansion-panel-content>
	</div>
</template>

<script>
	export default {
	};
</script>

<style>
	.expansionPanel .footer {
		opacity: 0.6;
	}

	.expansionPanel {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		width: 100%;
		margin: 16px 0;
		border-radius: 6px;
	}

	.expansionPanel .header {
		width: 100%;
		padding: 0;
	}

	.expansionPanel .expansion-panel__header {
		padding: 30px;
	}

	.expansionPanel .card__text.content {
		border-top: 1px solid rgba(10, 33, 64, 0.1);
		border-bottom: 1px solid rgba(10, 33, 64, 0.1);
	}
</style>
