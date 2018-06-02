<template>
	<vue-headful
		:title="`${translatedTitle} - Example`"
	/>
</template>

<script>
	import vueHeadful from 'vue-headful';

	export default {
		props: vueHeadful.props,
		components: { vueHeadful },
		computed: {
			translatedTitle()
			{
				return this.$t(this.title);
			}
		}
	};
</script>
