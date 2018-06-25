import { get } from '@/utils/api';

const state = {
	apps: [],
	fullApps: []
};

const mutations = {
	SET_APPS(state, data)
	{
		state.apps.push(data);
	},
	SET_APP(state, data)
	{
		state.apps[data.id] = data;
	}
};

const actions = {
	async loadApps({ state, commit }, force = false)
	{
		if(state.apps.length === 0 || force)
		{
			const { data } = await get(`dApps/items/${state.apps[state.apps.length].id}`);

			commit('SET_APPS', data);
		}

		return state.apps;
	},
	async loadApp({ state, commit }, id)
	{
		if(!state.fullApps[id])
		{
			const { data } = await get(`dApps/item/${id}`);

			commit('SET_APP', data);
		}

		return state.fullApps[id];
	}
};

const getters = {
	getApps: (state) => state.apps,
	getApp: (state) => (id) => state.fullApps[id]
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
