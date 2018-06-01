import Vue from 'vue';
import dot from 'dot-object';
import { get } from '@/utils/api';

const state = {
	locale: 'en',
	languages: {},
	updating: true,
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
	SET_LANGUAGE(state, { locale, i18n })
	{
		Vue.set(state.languages, locale, i18n);
	}
};

const actions = {
	load({ dispatch, state, commit })
	{
		if(state.languages[state.locale])
		{
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
				dispatch('app/appCallLoaded', 'i18n', { root: true });
			});
	},
	changeLocale({ commit, dispatch }, locale)
	{
		commit('CHANGE_LOCALE', locale);
		dispatch('load');
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

		return dot.pick(key, state.languages[state.localeActive]);
	},
	exists: (state, getters) => (key) => typeof getters.get(key) !== 'undefined'
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
