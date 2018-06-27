<template>
	<div class="section container">
		<v-text-field
			class="searchInput"
			v-model="searchQuery"
			append-icon="search"
			label="Search for DApps"
			@input="inputUpdated"
		/>
		<div v-if="loading" class="center">
			<v-progress-circular :size="50" indeterminate color="primary" />
		</div>
		<div v-else>
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
	import debounce from 'lodash/debounce';

	export default {
		mounted()
		{
			this.loadApps();
		},
		data()
		{
			return {
				searchQuery: '',
				page: 1,
				apps: [],
				totalApps: 0,
				totalPages: 0
			};
		},
		computed: {
			loading()
			{
				return this.$store.getters['dApps/getLoading'];
			}
		},
		methods: {
			async loadApps()
			{
				if(this.searchQuery !== '') return;

				const data = await this.$store.dispatch('dApps/loadApps', this.page);

				this.setAppsListData(data);
			},
			async searchApps()
			{
				const data = await this.$store.dispatch('dApps/search', { searchQuery: this.searchQuery, page: this.page });

				this.setAppsListData(data);
			},
			inputUpdated: debounce(async function run()
			{
				this.page = 1;

				if(this.searchQuery === '')
				{
					this.loadApps();
					return;
				}

				this.searchApps();
			}, 500),
			pageUpdated()
			{
				if(this.searchQuery === '')
				{
					this.loadApps();
				}
				else
				{
					this.searchApps();
				}
			},
			setAppsListData(data)
			{
				if(data.count)
				{
					this.totalApps = data.count;
					this.totalPages = Math.ceil(this.totalApps / this.$store.getters['dApps/appsPerPage']);
				}

				this.apps = data.rows;
			}
		}
	}
</script>

<style scoped>
</style>
