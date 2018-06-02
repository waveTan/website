import Vue from 'vue';
import dot from 'dot-object';
import { get } from '@/utils/api';

const state = {
	locale: 'en',
	languages: {},
	updating: false,
	updatedCounter: 0
};

const mutations = {
	UPDATE_LANGUAGE(state)
	{
		state.updating = false;
		state.updatedCounter += 1;
	},
	CHANGE_LOCALE(state, locale)
	{
		state.updating = true;
		state.locale = locale;
	},
	SET_LANGUAGE(state, i18n)
	{
		Vue.set(state.languages, state.locale, i18n);
	}
};

const actions = {
	load({ dispatch, state, commit })
	{
		if(state.languages[state.locale])
		{
			dispatch('app/appCallLoaded', 'i18n', { root: true });
			return commit('UPDATE_LANGUAGE');
		}

		return get(`i18n/${state.locale}/`)
			.then((res) =>
			{
				return res.data;
			})
			.then((data) =>
			{
				commit('SET_LANGUAGE', data);
				commit('UPDATE_LANGUAGE');
			})
			.then(() =>
			{
				dispatch('app/appCallLoaded', 'i18n', { root: true });
			});
	},
	changeLocale({ commit, dispatch }, locale)
	{
		localStorage.setItem('locale', locale);
		commit('CHANGE_LOCALE', locale);
		dispatch('load');
	},
	updateLocale({ commit, state })
	{
		commit('CHANGE_LOCALE', state.locale);
		commit('UPDATE_LANGUAGE');
	}
};

const getters = {
	updatedCounter: (state) =>
	{
		return state.updatedCounter;
	},
	get: (state) => (key) =>
	{
		if(!key) return null;

		return dot.pick(key, state.languages[state.locale]);
	},
	locale: (state) => state.locale,
	exists: (state, getters) => (key) => typeof getters.get(key) !== 'undefined'
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
