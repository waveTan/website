<template>
    <component v-if="show" :is="wrap" :data-key="id">
        <slot name="before"></slot>
        {{language}}
        <slot></slot>
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
			editable: {
				type: Boolean,
				default: true
			},
			alwaysEditable: {
				type: Boolean,
				default: false
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
			language()
			{
				console.log(this);
				return this.$t(this.id, this.vars);
			},
			show()
			{
				// `conditional` determines whether we want to completely hide the component if the lang key doesn't exist
				if(this.conditional)
				{
					return this.$te(this.id)
				}

				return true;
			}
		}
	};
</script>

<style scoped>
</style>
