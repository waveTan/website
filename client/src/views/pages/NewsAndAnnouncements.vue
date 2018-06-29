<template>
	<div>
		<HeaderLayout />
		<router-link :to="{ name: 'news' }">News</router-link>
		<router-link :to="{ name: 'announcements' }">Announcements</router-link>
		Foo bar - We are looking at [{{ category }}]
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
