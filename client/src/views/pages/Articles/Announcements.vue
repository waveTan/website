<template>
	<div>
		<HeaderMeta title="page.announcements.pageTitle" />
		<ItemsPro
			itemType="announcements"
			sm12
			@ellipsisUpdate="ellipsisUpdate"
		>
			<template slot-scope="{ item, imageDirectory }">
				<router-link :to="{ name: 'announcementsItem', params: { id: item.id, title: item.title } }">
					<v-card-title primary-title>
						<div class="item">
							<div class="details">
								<h2>{{ item.title }}</h2>
							</div>
							<div class="date">
								<p>{{ createdDate(item.created_at) }}</p>
							</div>
						</div>
					</v-card-title>
				</router-link>
			</template>
		</ItemsPro>
	</div>
</template>

<script>
	import moment from 'moment';
	import shave from 'shave';
	import ItemsPro from '@/components/ItemsPro';

	export default {
		components: {
			ItemsPro
		},
		methods: {
			createdDate(date)
			{
				return moment(date).format('YYYY-MM-DD');
			},
			ellipsisUpdate()
			{
				shave('.container.announcementsItems .item h2', 200);
			}
		}
	};
</script>

<style>
	.container.announcementsItems .card {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		margin: 10px 0;
	}

	.container.announcementsItems .item {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 200px;
	}

	.container.announcementsItems .details h2 {
		font-size: 36px;
		line-height: 40px;
		text-align: left;
		padding-right: 15px;
	}

	.container.announcementsItems .date {
		color: #445569;
	}

	.container.announcementsItems .date p {
		width: 85px;
		color: #445569;
	}

	@media screen and (max-width: 600px) {
		.container.announcementsItems .details h2 {
			font-size: 24px;
			line-height: 26px;
		}

		.container.announcementsItems .item {
			display: table;
		}

		.container.announcementsItems .details {
			display: table-footer-group;
			padding: 0;
		}

		.container.announcementsItems .date {
			display: table-header-group;
		}
	}
</style>
