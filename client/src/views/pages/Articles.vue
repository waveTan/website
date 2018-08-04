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
	import Header from '@/views/pages/articles/Header';
	import News from '@/views/pages/articles/News';
	import Announcements from '@/views/pages/articles/Announcements';
	import Blogs from '@/views/pages/articles/Blogs';

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
