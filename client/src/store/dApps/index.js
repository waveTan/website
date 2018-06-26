import { get } from '@/utils/api';

const state = {
	loading: false,
	apps: [],
	fullApps: []
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
	TOGGLE_LOADING(state)
	{
		state.loading = !state.loading;
	}
};

const actions = {
	async loadApps({ state, commit }, nextPage = false)
	{
		if(state.apps.length === 0 || nextPage)
		{
			let data = [];

			commit('TOGGLE_LOADING');

			if(nextPage)
			{
				({ data } = await get(`dApps/${state.apps[state.apps.length].id}`));
			}
			else
			{
				({ data } = await get('dApps/'));
			}

			commit('SET_APPS', data);
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
	}
};

const getters = {
	getApps: (state) => (page) =>
	{
		const perPage = 1;

		return state.apps.slice((page - 1) * perPage, ((page - 1) * perPage) + perPage);
	},
	getApp: (state) => (id) => state.fullApps[id],
	getLoading: (state) => state.loading
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
