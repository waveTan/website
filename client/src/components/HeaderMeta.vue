<template>
	<vue-headful
		:title="`${translatedTitle}`"
	/>
</template>

<script>
	import vueHeadful from 'vue-headful';

	export default {
		components: { vueHeadful },
		props: vueHeadful.props,
		computed: {
			translatedTitle()
			{
				const pageTitle = this.$t(this.title) || '';

				return `${(pageTitle ? `${pageTitle} - ` : '')} ${this.$t('header.websiteTitle')}`;
			}
		}
	};
</script>
