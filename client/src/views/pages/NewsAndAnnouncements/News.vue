<template>
	<div>
		<HeaderMeta title="page.news.pageTitle" />
		<ItemsPro itemType="news">
			<template slot-scope="{ item, imageDirectory }">
				<a :href="item.link" target="_blank">
					<v-card-media
							:src="`${imageDirectory}${item.image}`"
							height="200px"
					/>
					<v-card-title primary-title>
						<div>
							<h4 class="headline mb-0 center">{{ item.title }}</h4>
							<p class="center">{{ item.description }}</p>
						</div>
					</v-card-title>
				</a>
			</template>
		</ItemsPro>
	</div>
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
	.container.newsItems .card__media {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.container.newsItems .card__title div {
		width: 100%;
	}
</style>
