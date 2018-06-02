import Vue from 'vue';
import dot from 'dot-object';
import { get } from '@/utils/api';

const state = {
	tokens: {}
};

const mutations = {
	SET_TOKEN(state, { token, data })
	{
		Vue.set(state.tokens, token, data);
	}
};

const actions = {
	load({ dispatch, state, commit }, token)
	{
		if(state.tokens[token]) return false;

		return get(`tokens/price/${token}/`)
			.then((res) =>
			{
				return res.data;
			})
			.then((data) =>
			{
				commit('SET_TOKEN', { token, data });
			})
			.then(() =>
			{
				dispatch('app/appCallLoaded', 'nulsPrice', { root: true });
			});
	}
};

const getters = {
	get: (state) => (token) =>
	{
		return dot.pick(token, state.tokens);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
