<template>
	<v-dialog :value="open" max-width="50%">
		<v-card :class="dialogClass">
			<v-card-title>
				<div class="title">
					<slot name="header" />
				</div>
				<div class="close" @click="toggleOpen">
					<img src="/static/images/icons/close-icon.png" alt="X" />
				</div>
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
		},
		methods: {
			toggleOpen()
			{
				this.open = !this.open;
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

	.dialog__content .card__title {
		position: absolute;
		width: 100%;
	}

	.dialog__content .card__title .title {
		width: 100%;
		text-align: center;
	}

	.dialog__content .card__title .close {
		position: absolute;
		right: 16px;
		cursor: pointer;
		top: 16px;
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
