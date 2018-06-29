import { get, post } from '@/utils/api';

const state = {
	type: 'dApps',
	loading: false,
	items: {},
	fullItems: {},
	totalItems: 0,
	itemsPerPage: 2, // This should be changed on the backend too -> `\server\src\controllers\dApps\index.js::resultsLimit`
	searchResults: [],
	searchResultsLanguage: '',
	searchQuery: '',
	searchTotalItems: 0
};

const mutations = {
	SET_APPS(state, { locale, data })
	{
		if(!state.items[locale])
		{
			state.items[locale] = [];
		}

		state.items[locale].push(...data);
	},
	SET_APP(state, { locale, data })
	{
		if(!state.fullItems[locale])
		{
			state.fullItems[locale] = [];
		}

		state.fullItems[locale][data.id] = data;
	},
	SET_TOTAL_APPS(state, count)
	{
		state.totalItems = count;
	},
	TOGGLE_LOADING(state)
	{
		state.loading = !state.loading;
	},
	SET_SEARCH_TOTAL_APPS(state, count)
	{
		state.searchTotalItems = count;
	},
	SET_SEARCH_RESULTS(state, { locale, data })
	{
		state.searchResultsLanguage = locale;
		state.searchResults = data;
	},
	SET_SEARCH_QUERY(state, query)
	{
		state.searchQuery = query;
	}
};

const actions = {
	async loadItems({ state, commit, getters, rootGetters }, page)
	{
		if(!state.items[rootGetters['i18n/locale']] || state.items[rootGetters['i18n/locale']].length === 0 || page !== 1)
		{
			let data = { };

			if(!state.items[rootGetters['i18n/locale']] || state.items[rootGetters['i18n/locale']].length === 0)
			{
				commit('TOGGLE_LOADING');

				({ data } = await get('dApps/'));

				commit('SET_TOTAL_APPS', data.count);
				commit('SET_APPS', { locale: rootGetters['i18n/locale'], data: data.rows });
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.itemsPerPage) < state.totalItems && state.items[rootGetters['i18n/locale']].length < state.totalItems)
			{
				commit('TOGGLE_LOADING');

				({ data } = await get(`dApps/${state.items[rootGetters['i18n/locale']][state.items[rootGetters['i18n/locale']].length - 1].id}`));

				commit('SET_APPS', { locale: rootGetters['i18n/locale'], data: data.rows });
				commit('TOGGLE_LOADING');

				return data;
			}
		}

		return { count: state.totalItems, rows: getters.getItems(page) };
	},
	async loadItem({ state, commit, rootGetters }, id)
	{
		if(!state.fullItems[rootGetters['i18n/locale']] || !state.fullItems[rootGetters['i18n/locale']][id])
		{
			commit('TOGGLE_LOADING');

			const { data } = await get(`dApps/item/${id}`);

			commit('SET_APPS', { locale: rootGetters['i18n/locale'], data });
			commit('TOGGLE_LOADING');
		}

		return state.fullItems[id];
	},
	async search({ state, commit, getters, rootGetters }, { searchQuery, page })
	{
		if(state.searchQuery !== searchQuery || page !== 1 || state.searchResultsLanguage !== rootGetters['i18n/locale'])
		{
			let data = { };

			if(state.searchQuery !== searchQuery || state.searchResultsLanguage !== rootGetters['i18n/locale'])
			{
				commit('TOGGLE_LOADING');

				({ data } = await post('dApps/search/', { searchQuery }));

				commit('SET_SEARCH_TOTAL_APPS', data.count);
				commit('SET_SEARCH_RESULTS', { locale: rootGetters['i18n/locale'], data: data.rows });
				commit('SET_SEARCH_QUERY', searchQuery);
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.itemsPerPage) < state.searchTotalItems && state.searchResults.length < state.searchTotalItems)
			{
				commit('TOGGLE_LOADING');

				({ data } = await post(`dApps/search/${state.searchResults[state.searchResults.length - 1].id}`, { searchQuery }));

				commit('SET_SEARCH_RESULTS', { locale: rootGetters['i18n/locale'], data: [...state.searchResults, ...data.rows] });
				commit('TOGGLE_LOADING');
				commit('SET_SEARCH_QUERY', searchQuery);

				return data;
			}
		}

		return { count: state.searchTotalItems, rows: getters.getSearchItems(page) };
	}
};

const getters = {
	getItems: (state, getters, rootState, rootGetters) => (page) =>
	{
		if(!state.items[rootGetters['i18n/locale']]) return null;

		return state.items[rootGetters['i18n/locale']].slice((page - 1) * state.itemsPerPage, ((page - 1) * state.itemsPerPage) + state.itemsPerPage);
	},
	getSearchItems: (state, getters, rootState, rootGetters) => (page) =>
	{
		if(state.searchResultsLanguage !== rootGetters['i18n/locale']) return null;

		return state.searchResults.slice((page - 1) * state.itemsPerPage, ((page - 1) * state.itemsPerPage) + state.itemsPerPage);
	},
	getItem: (state) => (id) => state.fullItems[id],
	getLoading: (state) => state.loading,
	getTotalItems: (state) => state.totalItems,
	itemsPerPage: (state) => state.itemsPerPage
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
