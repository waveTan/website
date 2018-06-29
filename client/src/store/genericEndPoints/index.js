import { get } from '@/utils/api';

const state = {
	items: {},
	item: {},
	sentRequests: {}
};

const mutations = {
	SET_ITEMS(state, { locale, path, data })
	{
		if(!state.items[locale])
		{
			state.items[locale] = {};
		}

		if(state.items[locale][path])
		{
			state.items[locale][path].push(data);
		}
		else
		{
			state.items[locale][path] = data;
		}
	},
	SET_ITEM(state, { locale, path, data })
	{
		if(!state.items[locale])
		{
			state.items[locale] = {};
		}

		if(!state.item[locale][path])
		{
			state.item[locale][path] = [];
		}

		state.item[locale][path][data.id] = data;
	},
	UPDATE_SENT_REQUESTS(state, { locale, path })
	{
		if(!state.sentRequests[locale])
		{
			state.sentRequests[locale] = {};
		}

		state.sentRequests[locale][path] = true;
	}
};

const actions = {
	async loadItems({ dispatch, state, commit, rootGetters }, path)
	{
		if(!state.sentRequests[rootGetters['i18n/locale']] || !state.sentRequests[rootGetters['i18n/locale']][path])
		{
			commit('UPDATE_SENT_REQUESTS', { locale: rootGetters['i18n/locale'], path });
			dispatch('app/pageLoading', true, { root: true });

			const { data } = await get(path);

			dispatch('app/pageLoading', false, { root: true });

			commit('SET_ITEMS', { locale: rootGetters['i18n/locale'], path, data });
		}

		return state.items[rootGetters['i18n/locale']][path];
	},
	async loadItem({ dispatch, state, commit, rootGetters }, { path, id })
	{
		if(!state.sentRequests[rootGetters['i18n/locale']] || !state.sentRequests[rootGetters['i18n/locale']][path] || !state.sentRequests[rootGetters['i18n/locale']][path][id])
		{
			commit('UPDATE_SENT_REQUESTS', { locale: rootGetters['i18n/locale'], path });
			dispatch('app/pageLoading', true, { root: true });

			const { data } = await get(path);

			dispatch('app/pageLoading', false, { root: true });

			commit('SET_ITEM', { locale: rootGetters['i18n/locale'], path, data });
		}

		return state.itemrootGetters['i18n/locale'][path][id];
	}
};

const getters = {
	getItems: (state, getters, rootState, rootGetters) => (path) =>
	{
		if(!state.items[rootGetters['i18n/locale']]) return null;

		return state.items[rootGetters['i18n/locale']][path];
	},
	getItem: (state, getters, rootState, rootGetters) => (path, id) =>
	{
		if(!state.items[rootGetters['i18n/locale']]) return null;

		return state.item[rootGetters['i18n/locale']][path][id];
	},
	strapiUrl: () => process.env.STRAPI
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
