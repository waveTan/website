<template>
	<v-dialog :value="open" max-width="50%">
		<v-card :class="dialogClass">
			<v-card-title>
				<slot name="header" />
			</v-card-title>
			<v-card-text>
				<v-container fluid>
					<v-layout row wrap>
						<slot />
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions class="footer">
				<slot name="footer" />
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			open: {
				type: Boolean,
				default: false
			},
			dialogClass: {
				type: String,
				default: ''
			}
		}
	};
</script>

<style>
	.dialog__content .card {
		background: #0a2140;
		border-radius: 6px;
	}

	.dialog__content .card__text {
		padding: 16px 30px;
	}

	.dialog__content .card__media__background {
		background-position: center top !important;
	}

	.dialog__content h2 {
		color: #fff;
	}

	.dialog__content {
		color: #fff;
	}
</style>
