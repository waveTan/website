<template>
	<div>
		<HeaderLayout whiteBackground />
		<Header :showTitle="false" :category="category" />
		<div v-if="loading || !item" class="center">
			<v-progress-circular
				:size="50"
				indeterminate
				color="primary"
			/>
		</div>
		<div v-else>
			<div class="container">
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex sm12 md8>
							<h3>{{ title }}</h3>
							<h6>{{ formatDate(item.created_at) }}</h6>
							<div v-html="compiledMarkdown" class="markdown" />
							<SocialShare />
							<ItemsRelated
								:title="title"
								:type="category"
							/>
						</v-flex>
						<v-flex sm12 md4>
							<ItemsFeatured
								:title="title"
								:type="category"
							/>
						</v-flex>
					</v-layout>
				</v-container>
			</div>
		</div>
	</div>
</template>

<script>
	import marked from 'marked';
	import moment from 'moment';
	import SocialShare from '@/components/SocialShare';
	import ItemsRelated from '@/components/ItemsRelated';
	import ItemsFeatured from '@/components/ItemsFeatured';
	import Header from '@/views/pages/Articles/Header';
	import News from '@/views/pages/Articles/News';
	import Announcements from '@/views/pages/Articles/Announcements';

	export default {
		components: {
			SocialShare,
			ItemsRelated,
			ItemsFeatured,
			Header,
			News,
			Announcements
		},
		props: {
			category: {
				type: String,
				default: 'news'
			},
			routerName: {
				type: String,
				default: 'newsItem'
			}
		},
		data()
		{
			return {
				id: this.$store.state.route.params.id,
				title: this.$store.state.route.params.title
			};
		},
		computed: {
			loading()
			{
				return this.$store.getters['itemsPro/getLoading'];
			},
			item()
			{
				if(!this.$store.getters['itemsPro/getItem'](this.category, this.id))
				{
					this.$store.dispatch('itemsPro/loadItem', { type: this.category, id: this.id });
				}

				const item = this.$store.getters['itemsPro/getItem'](this.category, this.id);

				if(item && this.title !== item.title)
				{
					this.$router.push({ name: this.routerName, params: { id: this.id, title: item.title } });
					this.title = item.title;
				}

				return item;
			},
			compiledMarkdown()
			{
				return marked(this.item.content, { sanitize: true })
			}
		},
		methods: {
			formatDate(date)
			{
				return moment(date).format('D MMMM YYYY');
			}
		}
	};
</script>

<style scoped>
	.markdown >>> h1 {
		color: #0a2140;
	}

	.markdown >>> img {
		width: 100%;
	}

	h3 {
		line-height: 50px;
		padding-bottom: 0;
	}

	h6 {
		font-size: 14px;
		padding-bottom: 20px;
	}
</style>
