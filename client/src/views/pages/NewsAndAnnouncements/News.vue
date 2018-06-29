<template>
	<div>
		<HeaderMeta title="page.news.pageTitle" />
		<ItemsPro itemType="news" sm12>
			<template slot-scope="{ item, imageDirectory }">
				<v-container fluid>
					<v-layout row>
						<v-flex xs7>
							<div class="details">
								<h2>{{ item.title }}</h2>
								<p>{{ item.description }}</p>
							</div>
						</v-flex>
						<v-flex xs5 class="image">
							<v-card-media
									:src="`${imageDirectory}${item.image}`"
									height="200px"
									contain
							></v-card-media>
						</v-flex>
					</v-layout>
				</v-container>
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
	.container.newsItems .card {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		margin: 10px 0;
	}

	.container.newsItems .details {
		text-align: left;
		padding: 25px 40px 20px 40px;
	}

	.container.newsItems .details p {
		margin-top: 20px;
	}

	.container.newsItems .container {
		padding: 0;
	}

	.container.newsItems .image {
		padding: 0 !important;
	}

	.container.newsItems .image .card__media__background {
		background-position: right !important;
		border-radius: 0 6px 6px 0;
	}
</style>
