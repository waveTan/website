<template>
	<v-menu offset-y class="dropdown" content-class="test" :open-on-hover="true">
		<div slot="activator">
			<Button class="button" v-if="buttonTitle" :colour="buttonColour">
				{{title}}
				<img src="/static/images/icons/arrow-down.png" alt="" class="arrow" />
			</Button>
			<div v-else>
				{{title}}
				<img src="/static/images/icons/arrow-down.png" alt="" class="arrow" />
			</div>
		</div>
		<v-list class="items">
			<v-list-tile v-for="(item, index) in items" :key="index" class="item">
				<v-list-tile-title>{{ item.title }}</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		props: {
			buttonColour: {
				type: String,
				default: ''
			},
			buttonTitle: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				required: true
			},
			items: {
				type: Array,
				required: true
			}
		},
		components: {
			Button
		}
	};
</script>

<style scoped>
	.dropdown {
		box-shadow: none;
		border-radius: 0;
	}

	.items {
		background-image:
			linear-gradient(
					-134deg,
					#f1f4f8 0%,
					#eff4f8 14%,
					#eff4f8 18%,
					#eff4f8 20%,
					#ecf4f9 46%,
					#ebf4f9 49%,
					#ebf4f9 54%,
					#eaf4f9 65%,
					#e7f4fa 90%,
					#e7f4fa 90%,
					#e6f4fa 92%,
					#e6f4fa 100%
				);
		/*box-shadow: 0 14px 28px 0 rgba(10, 33, 64, 0.85);*/
		border-radius: 16px;
		padding: 0;
	}

	.item {
		font-size: 17px;
		color: #445569;
		text-align: center;
		padding: 0 15px;
		margin-top: 4px;
		cursor: pointer;
	}

	.button img {
		margin-left: 12px;
	}

	.button:hover img {
		opacity: 0.6;
		transform: rotate(-180deg);
	}
</style>
