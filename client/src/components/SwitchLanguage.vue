<template>
	<Dropdown
		:useButton="false"
		:items="[
			{ title: 'i18n.en', click: changeLocale, locale: 'en' },
			{ title: 'i18n.fr', click: changeLocale, locale: 'fr' }
		]"
	>
		<FontAwesomeIcon :icon="['fas', 'globe']" />
	</Dropdown>
</template>

<script>
	import Dropdown from '@/components/vuetify/Dropdown';

	export default {
		components: {
			Dropdown
		},
		methods: {
			changeLocale(item)
			{
				this.$store.dispatch('i18n/changeLocale', item.locale);
			}
		}
	};
</script>

<style scoped>
	div {
		position: absolute;
		right: 50px;
		margin-top: 20px;
	}

	svg {
		text-align: right;
		font-size: 32px;
	}

	@media screen and (max-width: 950px) {
		div {
			right: 120px;
		}
	}
</style>
