<template>
	<div>
		<div v-if="loading" class="center">
			<v-progress-circular :size="50" indeterminate color="primary" />
		</div>
		<div v-else>
			{{ apps }}
		</div>
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
			loading()
			{
				return this.$store.getters['dApps/getLoading'];
			},
			apps()
			{
				return this.$store.getters['dApps/getApps'](this.page);
			}
		}
	}
</script>
