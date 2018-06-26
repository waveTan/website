<template>
	<div class="section container">
		<div v-if="loading" class="center">
			<v-progress-circular :size="50" indeterminate color="primary" />
		</div>
		<div v-else>>
			<ul>
				<li v-for="(app, i) in apps" :key="i">
					{{ app.id }} -> {{ app.title }}
				</li>
			</ul>
			<div class="text-xs-center">
				<v-pagination
					:length="totalPages"
					v-model="page"
					:total-visible="7"
					@input="pageUpdated"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted()
		{
			this.loadApps();
		},
		data()
		{
			return {
				page: 1,
				apps: []
			};
		},
		computed: {
			loading()
			{
				return this.$store.getters['dApps/getLoading'];
			},
			totalPages()
			{
				return Math.ceil(this.$store.getters['dApps/getTotalApps'] / this.$store.getters['dApps/appsPerPage']);
			},
			totalApps()
			{
				return this.$store.getters['dApps/getTotalApps'];
			}
		},
		methods: {
			async loadApps()
			{
				await this.$store.dispatch('dApps/loadApps', this.page);

				this.apps = this.$store.getters['dApps/getApps'](this.page);
			},
			pageUpdated()
			{
				this.loadApps()
			}
		}
	}
</script>

<style scoped>
</style>
