<template>
	<div>
		<HeaderLayout whiteBackground />
		<Header :category="category" />
		<News v-if="category === 'news'" />
		<Announcements v-else />
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
		}
	};
</script>
