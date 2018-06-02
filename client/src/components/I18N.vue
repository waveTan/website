<template>
	<component v-if="show" :is="wrap" :data-key="id">
		<i18n :path="id" :places="vars">
			<slot></slot>
		</i18n>
	</component>
</template>

<script>
	export default {
		props: {
			id: {
				type: String,
				required: true
			},
			vars: {
				type: Object
			},
			// What tag to wrap the text in
			wrap: {
				type: String,
				default: 'span'
			},
			// Whether to hide component completely if the key does not exist
			conditional: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			// language()
			// {
			// 	return this.$t(this.id, this.vars);
			// },
			show()
			{
				// `conditional` determines whether we want to completely hide the component if the lang key doesn't exist
				if(this.conditional)
				{
					return this.$te(this.id);
				}

				return true;
			}
		}
	};
</script>

<style scoped>
</style>
