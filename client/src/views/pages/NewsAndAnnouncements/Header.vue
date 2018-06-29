<template>
	<div class="section grey">
		<div class="container">
			<h1 v-if="category === 'news'"><I18N id="page.newsAndAnnouncements.header.news" /></h1>
			<h1 v-else><I18N id="page.newsAndAnnouncements.header.announcements" /></h1>
			<router-link :to="{ name: 'news' }">News</router-link>
			<router-link :to="{ name: 'announcements' }">Announcements</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			category: {
				type: String,
				default: 'news'
			}
		}
	};
</script>

<style scoped>
	h1 {
		color: #0a2140;
	}

	.section.grey {
		margin-top: -70px;
	}

	.section.grey .centered {
		padding: 0;
	}
</style>
