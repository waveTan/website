import { get, post } from '@/utils/api';

const state = {
	loading: false,
	apps: [],
	fullApps: [],
	totalApps: 0,
	appsPerPage: 12, // This should be changed on the backend too -> `\server\src\controllers\dApps\index.js::resultsLimit`
	searchResults: [],
	searchQuery: '',
	searchTotalApps: 0
};

const mutations = {
	SET_APPS(state, data)
	{
		state.apps.push(...data);
	},
	SET_APP(state, data)
	{
		state.apps[data.id] = data;
	},
	SET_TOTAL_APPS(state, count)
	{
		state.totalApps = count;
	},
	TOGGLE_LOADING(state)
	{
		state.loading = !state.loading;
	},
	SET_SEARCH_TOTAL_APPS(state, count)
	{
		state.searchTotalApps = count;
	},
	SET_SEARCH_RESULTS(state, data)
	{
		state.searchResults = data;
	},
	SET_SEARCH_QUERY(state, query)
	{
		state.searchQuery = query;
	}
};

const actions = {
	async loadApps({ state, commit, getters }, page)
	{
		if(state.apps.length === 0 || page !== 1)
		{
			let data = { };

			if(state.apps.length === 0)
			{
				commit('TOGGLE_LOADING');

				({ data } = await get('dApps/'));

				commit('SET_TOTAL_APPS', data.count);
				commit('SET_APPS', data.rows);
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.appsPerPage) < state.totalApps && state.apps.length < state.totalApps)
			{
				commit('TOGGLE_LOADING');

				({ data } = await get(`dApps/${state.apps[state.apps.length - 1].id}`));

				commit('SET_APPS', data.rows);
				commit('TOGGLE_LOADING');

				return data;
			}
		}

		return { count: state.totalApps, rows: getters.getApps(page) };
	},
	async loadApp({ state, commit }, id)
	{
		if(!state.fullApps[id])
		{
			commit('TOGGLE_LOADING');

			const { data } = await get(`dApps/item/${id}`);

			commit('SET_APP', data);
			commit('TOGGLE_LOADING');
		}

		return state.fullApps[id];
	},
	async search({ state, commit, getters }, { searchQuery, page })
	{
		if(state.searchQuery !== searchQuery || page !== 1)
		{
			let data = { };

			if(state.searchQuery !== searchQuery)
			{
				commit('TOGGLE_LOADING');

				({ data } = await post('dApps/search/', { searchQuery }));

				commit('SET_SEARCH_TOTAL_APPS', data.count);
				commit('SET_SEARCH_RESULTS', data.rows);
				commit('SET_SEARCH_QUERY', searchQuery);
				commit('TOGGLE_LOADING');

				return data;
			}
			else if(((page - 1) * state.appsPerPage) < state.searchTotalApps && state.searchResults.length < state.searchTotalApps)
			{
				commit('TOGGLE_LOADING');

				({ data } = await post(`dApps/search/${state.searchResults[state.searchResults.length - 1].id}`, { searchQuery }));

				commit('SET_SEARCH_RESULTS', [...state.searchResults, ...data.rows]);
				commit('TOGGLE_LOADING');
				commit('SET_SEARCH_QUERY', searchQuery);

				return data;
			}
		}

		return { count: state.searchTotalApps, rows: getters.getSearchApps(page) };
	}
};

const getters = {
	getApps: (state) => (page) => state.apps.slice((page - 1) * state.appsPerPage, ((page - 1) * state.appsPerPage) + state.appsPerPage),
	getSearchApps: (state) => (page) => state.searchResults.slice((page - 1) * state.appsPerPage, ((page - 1) * state.appsPerPage) + state.appsPerPage),
	getApp: (state) => (id) => state.fullApps[id],
	getLoading: (state) => state.loading,
	getTotalApps: (state) => state.totalApps,
	appsPerPage: (state) => state.appsPerPage
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
