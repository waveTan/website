<template>
	<div>
		<HeaderMeta title="page.blogs.pageTitle" />
		<ItemsPro
			itemType="blogs"
			xs12
			sm6
			@ellipsisUpdate="ellipsisUpdate"
		>
			<template slot-scope="{ item, imageDirectory }">
				<router-link :to="{ name: 'blogsItem', params: { id: item.id, title: item.title } }">
					<div class="item">
						<div class="image">
							<img :src="`${imageDirectory}${item.image}`"  >
						</div>
						<div class="content">
							<h4>{{ item.title }}</h4>
							<!--<p class="center">{{ item.description }}</p>-->
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
				shave('.blogsItems .item h4', 160);
			}
		}
	};
</script>

<style scoped>
	.item {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		margin: 25px;
		height: 387px;
	}

	.item .content {
		padding: 20px;
	}

	.item .image img {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 600px) {
		.item {
			margin: 0;
		}
	}
</style>
