<template>
	<div>
		<HeaderMeta title="page.announcements.pageTitle" />
		<ItemsPro itemType="announcements" sm12>
			<template slot-scope="{ item, imageDirectory }">
				<router-link :to="{ name: 'announcementItem', params: { id: item.id, title: item.title } }">
					<v-card-title primary-title>
						<h3>{{ item.title }}</h3>
						<p class="date">{{ createdDate(item.created_at) }}</p>
					</v-card-title>
				</router-link>
			</template>
		</ItemsPro>
	</div>
</template>

<script>
	import moment from 'moment';
	import ItemsPro from '@/components/ItemsPro';

	export default {
		components: {
			ItemsPro
		},
		methods: {
			createdDate(date)
			{
				return moment(date).format('YYYY-MM-DD');
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

	.container.announcementsItems h3 {
		padding: 0 0 5px 20px;
	}

	.container.announcementsItems .date {
		position: absolute;
		right: 30px;
		color: #445569;
	}

	.container.announcementsItems .container {
		padding: 0;
	}

</style>
