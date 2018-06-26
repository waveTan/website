<template>
	<div>
		{{ apps }}
	</div>
</template>

<script>
	export default {
		async mounted()
		{
			await this.$store.dispatch('dApps/loadApps');
		},
		data()
		{
			return {
				page: 1
			};
		},
		computed: {
			apps()
			{
				return this.$store.getters['dApps/getApps'](this.page);
			}
		}
	}
</script>
