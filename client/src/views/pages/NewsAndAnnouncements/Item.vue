<template>
	<div>
		<HeaderLayout :whiteBackground="true" />
		<Header :category="category" :title="title " />
		<div v-if="loading || !item" class="center">
			<v-progress-circular
				:size="50"
				indeterminate
				color="primary"
			/>
		</div>
		<div v-else>
			<div class="container">
				<div v-html="compiledMarkdown" class="mardkdown" />
			</div>
		</div>
	</div>
</template>

<script>
	import marked from 'marked';
	import Header from '@/views/pages/NewsAndAnnouncements/Header';
	import News from '@/views/pages/NewsAndAnnouncements/News';
	import Announcements from '@/views/pages/NewsAndAnnouncements/Announcements';

	export default {
		components: {
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
				return marked(this.item.description, { sanitize: true })
			}
		}
	};
</script>

<style scoped>
	.mardkdown >>> h1 {
		color: #0a2140;
	}
</style>
