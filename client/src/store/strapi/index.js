import { get } from '@/utils/api-strapi';

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
	SET_ITEM(state, { path, item })
	{
		if(!state.item[path])
		{
			state.item[path] = [];
		}

		state.item[path][item.id] = item;
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
	}
};

const getters = {
	getItems: (state) => (path) => state.items[path],
	urlPath: () => process.env.STRAPI
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
