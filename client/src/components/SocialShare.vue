<template>
	<div>
		<h5><I18N id="socialShare.title" /></h5>
		<vue-goodshare-facebook
			:page_url="url"
			:title_social="$t('socialShare.facebook')"
			has_icon
		/>
		<vue-goodshare-linked-in
			:page_url="url"
			:title_social="$t('socialShare.linkedIn')"
			has_icon
		/>
		<vue-goodshare-twitter
			:page_url="url"
			:title_social="$t('socialShare.twitter')"
			has_icon
		/>
		<vue-goodshare-telegram
			:page_url="url"
			:title_social="$t('socialShare.telegram')"
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
		},
		data() {
			return {
				url: `${this.$store.getters['app/url']}${this.$route.fullPath}`
			}
		}
	};
</script>
