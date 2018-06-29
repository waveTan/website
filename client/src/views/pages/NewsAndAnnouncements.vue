<template>
	<div>
		<HeaderLayout />
		<router-link :to="{ name: 'news' }">News</router-link>
		<router-link :to="{ name: 'announcements' }">Announcements</router-link>
		Foo bar
	</div>
</template>
