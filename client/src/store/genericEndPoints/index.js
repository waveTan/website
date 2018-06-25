import { get } from '@/utils/api';

const state = {
	items: {},
	item: {}
};

const mutations = {
	SET_ITEMS(state, { path, data })
	{
		if(state.items[path])
		{
			state.items[path].push(data);
		}
		else
		{
			state.items[path] = data;
		}
	},
	SET_ITEM(state, { path, data })
	{
		if(!state.item[path])
		{
			state.item[path] = [];
		}

		state.item[path][data.id] = data;
	}
};

const actions = {
	async loadItems({ dispatch, state, commit }, path)
	{
		if(!state.items[path])
		{
			dispatch('app/pageLoading', true, { root: true });

			const { data } = await get(path);

			dispatch('app/pageLoading', false, { root: true });

			commit('SET_ITEMS', { path, data });
		}

		return state.items[path];
	},
	async loadItem({ dispatch, state, commit }, { path, id })
	{
		if(!state.item[path] || !state.item[path][id])
		{
			dispatch('app/pageLoading', true, { root: true });

			const { data } = await get(path);

			dispatch('app/pageLoading', false, { root: true });

			commit('SET_ITEM', { path, data });
		}

		return state.item[path][id];
	}
};

const getters = {
	getItems: (state) => (path) => state.items[path],
	getItem: (state) => (path, id) => state.item[path][id],
	strapiUrl: () => process.env.STRAPI
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
