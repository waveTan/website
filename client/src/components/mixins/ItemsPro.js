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
