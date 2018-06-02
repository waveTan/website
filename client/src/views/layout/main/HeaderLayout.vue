<template>
	<div class="container">
		<!--<v-icon class="mx-3">fab fa-youtube</v-icon>-->
		<v-toolbar-title class="mr-5 align-center">
			<router-link :to="{ name: 'home' }" class="headerLink">
				<span class="title">Example</span>
			</router-link>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-layout row align-center style="max-width: 650px">
			<!--<v-text-field-->
					<!--:placeholder="i18n('header.search')"-->
					<!--single-line-->
					<!--append-icon="search"-->
					<!--:append-icon-cb="() => {}"-->
					<!--color="white"-->
					<!--hide-details-->
			<!--&gt;</v-text-field>-->
		</v-layout>
	</div>
</template>

<script>
	export default {
		methods: {
			i18n(key)
			{
				return this.$t(key);
			}
		}
	};
</script>

<style scoped>
	.container {
		display: inherit;
		width: 100%;
		margin: 0;
	}

	.headerLink {
		color: inherit;
		text-decoration: none;
	}
</style>
