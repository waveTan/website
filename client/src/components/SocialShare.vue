<template>
	<div>
		<vue-goodshare-facebook
			page_url="https://github.com"
			title_social="Facebook"
			has_counter
			has_icon
		/>
		<vue-goodshare-linked-in
			page_url="https://github.com"
			title_social="LinkedIn"
			has_counter
			has_icon
		/>
		<vue-goodshare-twitter
			page_url="https://github.com"
			title_social="Twitter"
			has_counter
			has_icon
		/>
		<vue-goodshare-telegram
			page_url="https://github.com"
			title_social="Telegram"
			has_counter
			has_icon
		/>
	</div>
</template>

<script>
	import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
	import VueGoodshareLinkedIn from "vue-goodshare/src/providers/LinkedIn";
	import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit";
	import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter";
	import VueGoodshareTelegram from "vue-goodshare/src/providers/Telegram";

	export default {
		components: {
			VueGoodshareTelegram,
			VueGoodshareTwitter,
			VueGoodshareReddit,
			VueGoodshareLinkedIn,
			VueGoodshareFacebook
		}
	};
</script>
