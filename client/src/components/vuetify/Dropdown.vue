<template>
	<v-menu offset-y class="container">
		<Button slot="activator">{{title}}</Button>
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
	.container {
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
		margin-top: 13px;
		/*box-shadow: 0 14px 28px 0 rgba(10, 33, 64, 0.85);*/
		border-radius: 16px;
	}

	.item {
		font-size: 17px;
		color: #445569;
		text-align: center;
		padding: 8px 33px;
		border-top: 1px solid #445569;
	}
</style>
