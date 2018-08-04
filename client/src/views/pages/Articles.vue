<template>
	<div>
		<HeaderLayout whiteBackground />
		<Header :category="category" />
		<News v-if="category === 'news'" />
		<Announcements v-else />
	</div>
</template>

<script>
	import Header from '@/views/pages/Articles/Header';
	import News from '@/views/pages/Articles/News';
	import Announcements from '@/views/pages/Articles/Announcements';

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
