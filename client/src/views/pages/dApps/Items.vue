<template>
	<div class="section container">
		<v-text-field
			class="searchInput"
			v-model="searchQuery"
			append-icon="search"
			:label="`${$t('page.dApps.items.search')}`"
			@input="inputUpdated"
		/>
		<div v-if="loading" class="center">
			<v-progress-circular :size="50" indeterminate color="primary" />
		</div>
		<div v-else>
			<v-container grid-list-md text-xs-center class="dAppItems">
				<v-layout row wrap>
					<v-flex v-for="(app, i) in getItems" :key="i" sm6 md3>
						<v-card flat tile>
							<a :href="app.link" target="_blank">
								<v-card-media
										:src="`${imageDirectory}${app.image}`"
										height="150px"
								/>
								<v-card-title primary-title>
									<div>
										<h4 class="headline mb-0 center">{{ app.title }}</h4>
										<p class="center">{{ app.description }}</p>
										<p class="center">
											<I18N id="page.dApps.items.status" />
											<span v-if="app.active" class="live"><I18N id="page.dApps.items.live" /> ●</span>
											<span v-else class="beta"><I18N id="page.dApps.items.beta" /> ●</span>
										</p>
									</div>
								</v-card-title>
							</a>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
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
		data()
		{
			return {
				searchQuery: '',
				page: 1,
				items: [],
				totalItems: 1,
				totalPages: 1,
				imageDirectory: this.$store.getters['items/strapiUrl']
			};
		},
		computed: {
			loading()
			{
				return this.$store.getters['itemsPro/getLoading'];
			},
			getItems()
			{
				if(this.searchQuery === '')
				{
					if(!this.$store.getters['itemsPro/getItems']('dApps', this.page))
					{
						this.loadItems();
					}

					const data = this.$store.getters['itemsPro/getItems']('dApps', this.page);

					this.setItemsListData(data);

					return this.items;
				}

				if(!this.$store.getters['itemsPro/getSearchItems'](this.page))
				{
					this.searchItems();
				}

				return this.$store.getters['itemsPro/getSearchItems'](this.page);
			}
		},
		methods: {
			async loadItems()
			{
				if(this.searchQuery !== '') return;

				const data = await this.$store.dispatch('itemsPro/loadItems', { type: 'dApps', page: this.page });

				this.setItemsListData(data);
			},
			async searchItems()
			{
				const data = await this.$store.dispatch('itemsPro/search', { searchQuery: this.searchQuery, page: this.page });

				this.setItemsListData(data);
			},
			inputUpdated: debounce(async function run()
			{
				this.page = 1;
				this.totalItems = 1;
				this.totalPages = 1;

				if(this.searchQuery === '')
				{
					this.loadItems();
					return;
				}

				this.searchItems();
			}, 500),
			pageUpdated()
			{
				if(this.searchQuery === '')
				{
					this.loadItems();
				}
				else
				{
					this.searchItems();
				}
			},
			setItemsListData(data)
			{
				if(data.count)
				{
					this.totalItems = data.count;
					this.totalPages = Math.ceil(this.totalItems / this.$store.getters['itemsPro/itemsPerPage']);
				}

				this.items = data.rows;
			}
		}
	}
</script>

<style>
	.container.dAppItems .card__media {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.container.dAppItems .card__title div {
		width: 100%;
	}

	.dAppItems .live {
		color: #56c400;
	}

	.dAppItems .beta {
		color: #f47926;
	}
</style>
