const state = {
	count: 0
};

const mutations = {
	INCREMENT(state)
	{
		state.count += 1;
	},
	DECREMENT(state)
	{
		state.count -= 1;
	}
};

const actions = {
	incrementAsync({ commit, dispatch })
	{
		dispatch('i18n/load', null, { root: true });
		setTimeout(() =>
		{
			commit('INCREMENT');
		}, 200);
	}
};

const getters = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
