import Vue from 'vue';

const state = {
	loading: true,
	rootLoading: {},
	loadingStack: [],
	drawer: null,
	dialog: { active: false, id: null },
	pageLoading: false
};

const mutations = {
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
	},
	UPDATE_DRAWER(state, value)
	{
		state.drawer = value;
	},
	UPDATE_DIALOG(state, payload)
	{
		state.dialog = payload;
	},
	LOADING_CONTENT(state, value)
	{
		state.pageLoading = value;
	}
};

const actions = {
	usersLocalStorage({ dispatch })
	{
		if(localStorage.getItem('locale'))
		{
			dispatch('appCallLoading', 'i18n');
			dispatch('i18n/changeLocale', localStorage.getItem('locale'), { root: true });
		}
	},
	load({ dispatch })
	{
		dispatch('usersLocalStorage');
		// dispatch('appCallLoading', 'nulsPrice');
		// dispatch('tokens/load', 'nuls', { root: true });

		// Everything below here is collected from the localStorage because they've visited before and we don't need to request the server again
		// if(localStorage.getItem('store') && JSON.parse(localStorage.getItem('store')).version === version && process.env.NODE_ENV !== 'development')
		// {
		// 	return;
		// }

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
	},
	updateDrawer({ commit }, value)
	{
		commit('UPDATE_DRAWER', value);
	},
	updateDialog({ commit }, payload)
	{
		commit('UPDATE_DIALOG', payload);
	},
	pageLoading({ commit }, value)
	{
		commit('LOADING_CONTENT', value);
	}
};

const getters = {
	appLoaded: (state) => state.rootLoading,
	loadingStack: (state) => state.loadingStack,
	drawer: (state) => state.drawer,
	dialog: (state) => state.dialog,
	pageLoading: (state) => state.pageLoading
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
