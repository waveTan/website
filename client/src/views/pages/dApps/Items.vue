<template>
	<ItemsPro
		itemType="dApps"
		sm6
		md3
	>
		<template slot-scope="{ item, imageDirectory }">
			<a :href="item.link" target="_blank">
				<v-card-media
					:src="`${imageDirectory}${item.image}`"
					height="150px"
				/>
				<v-card-title primary-title>
					<div>
						<h4 class="headline mb-0 center">{{ item.title }}</h4>
						<p class="center">{{ item.description }}</p>
						<p class="center">
							<I18N id="page.dApps.items.status" />
							<span v-if="item.active" class="live"><I18N id="page.dApps.items.live" /> ●</span>
							<span v-else class="beta"><I18N id="page.dApps.items.beta" /> ●</span>
						</p>
					</div>
				</v-card-title>
			</a>
		</template>
	</ItemsPro>
</template>

<script>
	import ItemsPro from '@/components/ItemsPro';

	export default {
		components: {
			ItemsPro
		}
	}
</script>

<style>
	.container.dAppItems .card__media {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.container.dAppItems .card__title div {
		width: 100%;
	}

	.dAppItems .live {
		color: #56c400;
	}

	.dAppItems .beta {
		color: #f47926;
	}
</style>
