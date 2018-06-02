import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import merge from 'deepmerge';
import { version } from './../../package.json';
import app from '@/store/app';
import i18n from '@/store/i18n';
// import tokens from '@/store/tokens';

const modules = {
	app,
	i18n,
	// tokens
};

Vue.use(Vuex);

const state = {
	version: null
};

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
