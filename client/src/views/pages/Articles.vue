<template>
	<div>
		<HeaderLayout whiteBackground />
		<Header :category="category" />
		<News v-if="category === 'news'" />
		<Announcements v-else-if="category === 'announcements'" />
		<Blogs v-else-if="category === 'blogs'" />
	</div>
</template>

<script>
	import Header from '@/views/pages/Articles/Header';
	import News from '@/views/pages/Articles/News';
	import Announcements from '@/views/pages/Articles/Announcements';
	import Blogs from '@/views/pages/Articles/Blogs';

	export default {
		components: {
			Header,
			News,
			Announcements,
			Blogs
		},
		props: {
			category: {
				type: String,
				default: 'news'
			}
		}
	};
</script>
