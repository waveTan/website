<template>
	<div class="section container">
		<v-text-field
			v-model="searchQuery"
			:label="`${$t(searchTextKey)}`"
			append-icon="search"
			class="searchInput"
			@input="inputUpdated"
		/>
		<div v-if="loading" class="center">
			<v-progress-circular
				:size="50"
				indeterminate
				color="primary"
			/>
		</div>
		<div v-else>
			<v-container
				:class="`${itemType}Items`"
				grid-list-md
				text-xs-center
			>
				<v-layout row wrap>
					<v-flex
						v-for="(item, i) in getItems"
						:key="i"
						:sm12="sm12"
						:sm6="sm6"
						:md3="md3"
					>
						<v-card flat tile>
							<slot :item="item" :imageDirectory="imageDirectory" />
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
		props: {
			itemType: {
				type: String,
				required: true
			},
			sm12: {
				type: Boolean,
				default: false
			},
			sm6: {
				type: Boolean,
				default: false
			},
			md3: {
				type: Boolean,
				default: false
			}
		},
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
			searchTextKey()
			{
				return `page.${this.itemType}.items.search`;
			},
			loading()
			{
				return this.$store.getters['itemsPro/getLoading'];
			},
			getItems()
			{
				if(this.searchQuery === '')
				{
					if(!this.$store.getters['itemsPro/getItems'](this.itemType, this.page))
					{
						this.loadItems();
					}

					const data = this.$store.getters['itemsPro/getItems'](this.itemType, this.page);

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

				const data = await this.$store.dispatch('itemsPro/loadItems', { type: this.itemType, page: this.page });

				this.setItemsListData(data);
			},
			async searchItems()
			{
				const data = await this.$store.dispatch('itemsPro/search', { type: this.itemType, searchQuery: this.searchQuery, page: this.page });

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
				if(!data) return;

				if(data.count)
				{
					this.totalItems = data.count;
					this.totalPages = Math.ceil(this.totalItems / this.$store.getters['itemsPro/itemsPerPage']);
				}

				this.items = data.rows;
			}
		}
	};
</script>

<style>
	.searchInput.input-group .input-group__append-icon {
		margin-right: 10px;
	}
</style>
