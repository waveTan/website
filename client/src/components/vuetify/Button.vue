<template>
	<v-btn
		@click="executeFunction($event)"
		:class="{[colour]: true, noShadow: !shadow, noBorder: !border, [`text-${textClass}`]: true}"
		class="button"
		round
	>
		<slot />
		<img
			v-if="icon"
			:src="`@/assets/images/icons/${icon}.png`"
			alt=""
			class="arrow"
		>
	</v-btn>
</template>

<script>
	export default {
		props: {
			onClick: {
				type: [Function, Boolean],
				required: false,
				default: false
			},
			onClickVars: {
				type: [Array, Boolean],
				default: false
			},
			routeLink: {
				type: [String, Boolean],
				default: false
			},
			colour: {
				type: String,
				default: 'green'
			},
			icon: {
				type: [String, Boolean],
				default: false
			},
			textStyle: {
				type: String,
				default: ''
			},
			shadow: {
				type: Boolean,
				default: true
			},
			textClass: {
				type: String,
				default: ''
			},
			border: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			executeFunction(event)
			{
				if(this.onClick)
				{
					if(this.onClickVars)
					{
						this.onClick(...this.onClickVars);
					}
					else
					{
						this.onClick(event);
					}
				}
				else if(this.routeLink)
				{
					this.$router.push({ name: this.routeLink });
				}

				this.$emit('click', event);

				return true;
			}
		}
	};
</script>

<style>
	.button {
		font-size: 18px;
		color: #fff;
		text-transform: none;
		height: 55px;
	}

	.btn__content {
		background: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
		padding: 0 28px;
		font-size: 18px;
		color: #fff;
		text-transform: none;
		height: 55px;
	}

	button:hover {
		background: #56c400;
		opacity: 0.7;
	}

	.button.white {
		background: #fff;
	}

	.button.white .btn__content {
		opacity: 0.8;
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 100px;
		color: #56c400;
	}

	.button.transparent .btn__content {
		background: none;
		box-shadow: none;
		color: #fff;
		border: 1px solid #fff;
	}

	.button.blueBorder .btn__content {
		border: 1px solid #0a2140;
	}

	.button.noShadow .btn__content {
		box-shadow: none;
	}

	.button.noBorder .btn__content {
		border: none;
	}

	.btn:not(.btn--depressed) {
		box-shadow: none;
	}

	.button img {
		margin-left: 12px;
	}

	.button.text-blue .btn__content {
		color: #0a2140;
	}

	.button.text-white .btn__content {
		color: #fff;
	}

	.button.text-green .btn__content {
		color: #56c400;
	}

	.button.text-black .btn__content {
		color: #445569;
	}
</style>
