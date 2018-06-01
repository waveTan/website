import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import app from '@/store/app';
import i18n from '@/store/i18n';
import counter from '@/store/counter';

const modules = {
	app,
	i18n,
	counter
};

Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};

const store = new Store({
	strict: true,
	state,
	mutations,
	actions,
	modules
});

export default store;
