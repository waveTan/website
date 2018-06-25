// import Vue from 'vue';
// import dot from 'dot-object';
import { get } from '@/utils/api-strapi';

const state = {
	items: {},
	item: {}
};

const mutations = {
	SET_ITEMS(state, { category, items })
	{
		if(state.items[category])
		{
			state.items[category].push(items);
		}
		else
		{
			state.items[category] = items;
		}
	},
	SET_ITEM(state, { category, item })
	{
		if(!state.item[category])
		{
			state.item[category] = [];
		}

		state.item[category][item.id] = item;
	}
};

const actions = {
	async loadItems({ dispatch, state, commit }, category)
	{
		const { data } = await get('nulsPartners');
		console.log(data);
	}
	// load({ dispatch, state, commit }, token)
	// {
	// 	if(state.tokens[token]) return false;
	//
	// 	return get(`tokens/price/${token}/`)
	// 		.then((res) =>
	// 		{
	// 			return res.data;
	// 		})
	// 		.then((data) =>
	// 		{
	// 			commit('SET_TOKEN', { token, data });
	// 		})
	// 		.then(() =>
	// 		{
	// 			dispatch('app/appCallLoaded', 'nulsPrice', { root: true });
	// 		});
	// }
};

const getters = {
	// get: (state) => (token) =>
	// {
	// 	return dot.pick(token, state.tokens);
	// }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
