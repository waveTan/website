<template>
	<div>
		<HeaderLayout :whiteBackground="true" />
		<Header :category="category" :title="id" />
		hello {{ id }}
	</div>
</template>

<script>
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
			}
		},
		data()
		{
			return {
				id: this.$store.state.route.params.id
			};
		}
	};
</script>

<style scoped>
</style>
