import Vue from 'vue';

const state = {
	loading: true,
	rootLoading: {},
	loadingStack: []
};

const mutations = {
	// START_LOADING(state)
	// {
	// 	state.loading = true;
	// },
	// STOP_LOADING(state)
	// {
	// 	state.loading = false;
	// },
	PUSH_TO_LOADING_STACK(state)
	{
		state.loadingStack.push({});
	},
	POP_FROM_LOADING_STACK(state)
	{
		state.loadingStack.pop();
	},
	UPDATE_ROOT_LOADING(state, { push, value })
	{
		if(push)
		{
			Vue.set(state.rootLoading, value, true);
		}
		else
		{
			Vue.delete(state.rootLoading, value);
		}
	}
};

const actions = {
	load({ dispatch })
	{
		dispatch('appCallLoading', 'i18n');

		dispatch('i18n/load', null, { root: true });
	},
	startLoading({ commit })
	{
		// commit('START_LOADING');
		commit('PUSH_TO_LOADING_STACK');
	},
	stopLoading({ commit })
	{
		// commit('STOP_LOADING');
		commit('POP_FROM_LOADING_STACK');
	},
	appCallLoading({ commit }, value)
	{
		commit('UPDATE_ROOT_LOADING', { push: true, value });
	},
	appCallLoaded({ commit }, value)
	{
		commit('UPDATE_ROOT_LOADING', { value });
	}
};

const getters = {
	appLoaded: (state) => state.rootLoading,
	loadingStack: (state) => state.loadingStack
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
