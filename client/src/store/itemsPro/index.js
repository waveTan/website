import Vue from 'vue';
import { get, post } from '@/utils/api';

const state = {
	type: 'dApps',
	loading: false,
	items: {},
	fullItems: {},
	totalItems: [],
	itemsPerPage: 8, // This should be changed on the backend too -> `\server\src\controllers\dApps\index.js::resultsLimit`
	searchResults: [],
	searchResultsLanguage: '',
	searchQuery: '',
	searchTotalItems: 0,
	featuredItems: {}
};

const mutations = {
	SET_ITEMS(state, { type, locale, data })
	{
		if(!state.items[type])
		{
			Vue.set(state.items, type, {});
		}

		if(!state.items[type][locale])
		{
			Vue.set(state.items[type], locale, []);
		}

		state.items[type][locale].push(...data);
	},
	SET_ITEM(state, { type, locale, data })
	{
		if(!state.fullItems[type])
		{
			Vue.set(state.fullItems, type, {});
		}

		if(!state.fullItems[type][locale])
		{
			Vue.set(state.fullItems[type], locale, []);
		}

		state.fullItems[type][locale][data.id] = data;
	},
	SET_TOTAL_ITEMS(state, { type, count })
	{
		Vue.set(state.totalItems, type, count);
	},
	TOGGLE_LOADING(state)
	{
		state.loading = !state.loading;
	},
	SET_SEARCH_TOTAL_ITEMS(state, count)
	{
		state.searchTotalItems = count;
	},
	SET_SEARCH_RESULTS(state, { locale, data })
	{
		state.searchResultsLanguage = locale;
		Vue.set(state, 'searchResults', data);
	},
	SET_SEARCH_QUERY(state, query)
	{
		state.searchQuery = query;
	},
	SET_FEATURED_ITEMS(state, { type, locale, data })
	{
		if(!state.featuredItems[type])
		{
			Vue.set(state.featuredItems, type, {});
		}

		state.featuredItems[type][locale] = data;
	}
};

const actions = {
	async loadItems({ state, commit, getters, rootGetters }, { type, page })
	{
		if(!state.items[type] || !state.items[type][rootGetters['i18n/locale']] || state.items[type][rootGetters['i18n/locale']].length === 0 || page !== 1)
		{
			let data = { };

			if(!state.items[type] || !state.items[type][rootGetters['i18n/locale']] || state.items[type][rootGetters['i18n/locale']].length === 0)
			{
				commit('TOGGLE_LOADING');

				({ data } = await get(`${type}/`));

				commit('SET_TOTAL_ITEMS', { type, count: data.count });
				commit('SET_ITEMS', { type, locale: rootGetters['i18n/locale'], data: data.rows });
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.itemsPerPage) >= state.items[type][rootGetters['i18n/locale']].length && state.items[type][rootGetters['i18n/locale']].length < state.totalItems[type])
			{
				commit('TOGGLE_LOADING');

				({ data } = await get(`${type}/${state.items[type][rootGetters['i18n/locale']][state.items[type][rootGetters['i18n/locale']].length - 1].id}`));

				commit('SET_ITEMS', { type, locale: rootGetters['i18n/locale'], data: data.rows });
				commit('TOGGLE_LOADING');

				return data;
			}
		}

		return { count: state.totalItems[type], rows: getters.getItems(type, page) };
	},
	async loadItem({ state, commit, rootGetters }, { type, id })
	{
		if(!state.fullItems[type] || !state.fullItems[type][rootGetters['i18n/locale']] || !state.fullItems[type][rootGetters['i18n/locale']][id])
		{
			commit('TOGGLE_LOADING');

			const { data } = await get(`${type}/item/${id}`);

			commit('SET_ITEM', { type, locale: rootGetters['i18n/locale'], data });
			commit('TOGGLE_LOADING');
		}

		return state.fullItems[type][rootGetters['i18n/locale']][id];
	},
	async search({ state, commit, getters, rootGetters }, { type, searchQuery, page, limit = null })
	{
		if(state.searchQuery !== searchQuery || page !== 1 || state.searchResultsLanguage !== rootGetters['i18n/locale'])
		{
			let data = { };

			if(state.searchQuery !== searchQuery || state.searchResultsLanguage !== rootGetters['i18n/locale'])
			{
				commit('TOGGLE_LOADING');

				({ data } = await post(`${type}/search/`, { searchQuery, limit }));

				commit('SET_SEARCH_TOTAL_ITEMS', data.count);
				commit('SET_SEARCH_RESULTS', { locale: rootGetters['i18n/locale'], data: data.rows });
				commit('SET_SEARCH_QUERY', searchQuery);
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.itemsPerPage) < state.searchTotalItems && state.searchResults.length < state.searchTotalItems)
			{
				commit('TOGGLE_LOADING');

				({ data } = await post(`${type}/search/${state.searchResults[state.searchResults.length - 1].id}`, { searchQuery, limit }));

				commit('SET_SEARCH_RESULTS', { locale: rootGetters['i18n/locale'], data: [...state.searchResults, ...data.rows] });
				commit('TOGGLE_LOADING');
				commit('SET_SEARCH_QUERY', searchQuery);

				return data;
			}
		}

		return { count: state.searchTotalItems, rows: getters.getSearchItems(page) };
	},
	async loadFeaturedItems({ state, commit, rootGetters }, { type })
	{
		if(!state.featuredItems[type] || !state.featuredItems[type][rootGetters['i18n/locale']])
		{
			const { data } = await get(`${type}/featured`);

			commit('SET_FEATURED_ITEMS', { type, locale: rootGetters['i18n/locale'], data });
		}

		return state.fullItems[type][rootGetters['i18n/locale']];
	}
};

const getters = {
	getItems: (state, getters, rootState, rootGetters) => (type, page) =>
	{
		if(!state.items[type] || !state.items[type][rootGetters['i18n/locale']]) return null;

		return {
			count: state.totalItems[type],
			rows: state.items[type][rootGetters['i18n/locale']].slice((page - 1) * state.itemsPerPage, ((page - 1) * state.itemsPerPage) + state.itemsPerPage)
		};
	},
	getSearchItems: (state, getters, rootState, rootGetters) => (page) =>
	{
		if(state.searchResultsLanguage !== rootGetters['i18n/locale']) return null;

		return state.searchResults.slice((page - 1) * state.itemsPerPage, ((page - 1) * state.itemsPerPage) + state.itemsPerPage);
	},
	getItem: (state, getters, rootState, rootGetters) => (type, id) =>
	{
		if(!state.fullItems[type] || !state.fullItems[type][rootGetters['i18n/locale']]) return null;

		return state.fullItems[type][rootGetters['i18n/locale']][id];
	},
	getLoading: (state) => state.loading,
	getTotalItems: (state) => (type) => state.totalItems[type],
	itemsPerPage: (state) => state.itemsPerPage,
	getFeatured: (state, getters, rootState, rootGetters) => (type) =>
	{
		if(!state.featuredItems[type] || !state.featuredItems[type][rootGetters['i18n/locale']]) return null;

		return state.featuredItems[type][rootGetters['i18n/locale']];
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
