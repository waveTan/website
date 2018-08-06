<template>
	<div>
		<HeaderMeta title="page.news.pageTitle" />
		<ItemsPro itemType="news" sm12 @ellipsisUpdate="ellipsisUpdate">
			<template slot-scope="{ item, imageDirectory }">
				<router-link :to="{ name: 'newsItem', params: { id: item.id, title: item.title } }">
					<div class="item">
						<div class="details">
							<h2>{{ item.title }} </h2> <!-- A space is needed at the end of the text for `shave` to work for some reason :/ Don't remove it! lol -->
						</div>
						<div class="image">
							<img :src="`${imageDirectory}${item.image}`" height="200px" />
						</div>
					</div>
				</router-link>
			</template>
		</ItemsPro>
	</div>
</template>

<script>
	import shave from 'shave';
	import ItemsPro from '@/components/ItemsPro';

	export default {
		components: {
			ItemsPro
		},
		methods: {
			ellipsisUpdate()
			{
				shave('.container.newsItems .item h2', 200);
			}
		}
	};
</script>

<style>
	.container.newsItems .card {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		margin: 10px 0;
	}

	.container.newsItems .item {
		display: flex;
		height: 200px;
	}

	.container.newsItems .container {
		padding: 0;
	}

	.container.newsItems .details {
		text-align: left;
		width: 100%;
		padding: 25px 40px 20px 40px;
	}

	.container.newsItems .image {
		width: 320px;
	}

	.container.newsItems .image img {
		border-radius: 0 6px 6px 0;
	}

	.container.newsItems h2 {
		font-size: 36px;
		line-height: 44px;
	}
</style>
