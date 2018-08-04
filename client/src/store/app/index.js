import Vue from 'vue';

const state = {
	loading: true,
	rootLoading: {},
	loadingStack: [],
	drawer: null,
	dialog: { active: false, id: null },
	pageLoading: false,
	navigationMenuOpen: false
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
	},
	TOGGLE_NAVIGATION_MENU(state, force)
	{
		if(force)
		{
			state.navigationMenuOpen = true;
		}
		else
		{
			state.navigationMenuOpen = !state.navigationMenuOpen;
		}
	}
};

const actions = {
	usersLocalStorage({ dispatch })
	{
		dispatch('appCallLoading', 'i18n');

		if(localStorage.getItem('locale'))
		{
			dispatch('i18n/changeLocale', localStorage.getItem('locale'), { root: true });
		}
		else
		{
			dispatch('i18n/load', null, { root: true });
		}
	},
	load({ dispatch })
	{
		dispatch('usersLocalStorage');
	},
	startLoading({ commit })
	{
		commit('PUSH_TO_LOADING_STACK');
	},
	stopLoading({ commit })
	{
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
	},
	toggleNavigationMenu({ commit }, force = false)
	{
		commit('TOGGLE_NAVIGATION_MENU', force);
	}
};

const getters = {
	appLoaded: (state) => state.rootLoading,
	loadingStack: (state) => state.loadingStack,
	drawer: (state) => state.drawer,
	dialog: (state) => state.dialog,
	pageLoading: (state) => state.pageLoading,
	apiUrl: () => `${process.env.API}api/${process.env.API_VERSION}`,
	navigationMenuOpen: () => state.navigationMenuOpen
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
