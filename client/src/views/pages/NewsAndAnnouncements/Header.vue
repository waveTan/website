<template>
	<div class="section grey">
		<div class="container">
			<h1 v-if="category === 'news'"><I18N id="page.newsAndAnnouncements.header.news" /></h1>
			<h1 v-else><I18N id="page.newsAndAnnouncements.header.announcements" /></h1>
			<ul class="centered">
				<li :class="{ active: category === 'news' }"><router-link :to="{ name: 'news' }">News</router-link></li>
				<li :class="{ active: category === 'announcements' }"><router-link :to="{ name: 'announcements' }">Announcements</router-link></li>
			</ul>
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
		padding: 20px 0 140px 0;
	}

	ul {
		list-style: none;
		width: fit-content;
	}

	li {
		float: left;
		border-radius: 100px;
		font-size: 24px;
		letter-spacing: 1px;
		line-height: 76.8px;
		cursor: pointer;
	}

	a {
		border: none;
		display: block;
		padding: 0 30px;
	}

	li.active,
	li:hover {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
	}

	li.active a {
		color: #56c400;
	}
</style>
