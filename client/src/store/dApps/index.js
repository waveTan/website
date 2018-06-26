import { get, post } from '@/utils/api';

const state = {
	loading: false,
	apps: [],
	fullApps: [],
	totalApps: 0,
	appsPerPage: 2 // This should be changed on the backend too -> `\server\src\controllers\dApps\index.js::resultsLimit`
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
	}
};

const actions = {
	async loadApps({ state, commit }, page)
	{
		if(state.apps.length === 0 || page !== 1)
		{
			let data = { rows: [] };

			commit('TOGGLE_LOADING');

			if(state.apps.length === 0)
			{
				({ data } = await get('dApps/'));

				commit('SET_TOTAL_APPS', data.count);
			}
			else if(((page - 1) * state.appsPerPage) < state.totalApps && state.apps.length < state.totalApps)
			{
				({ data } = await get(`dApps/${state.apps[state.apps.length - 1].id}`));
			}

			commit('SET_APPS', data.rows);
			commit('TOGGLE_LOADING');
		}

		return state.apps;
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
	async search({ commit }, { searchQuery })
	{
		commit('TOGGLE_LOADING');

		const { data } = await post('dApps/search/', { searchQuery });

		commit('TOGGLE_LOADING');

		return data.rows;
	}
};

const getters = {
	getApps: (state) => (page) => state.apps.slice((page - 1) * state.appsPerPage, ((page - 1) * state.appsPerPage) + state.appsPerPage),
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
