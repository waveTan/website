import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import VueI18N from 'vue-i18n';
import VeeValidate from 'vee-validate';
import VueMasonry from 'vue-masonry-css';
// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
// import initialLoad from '@/utils/initialLoad';
// import socket from '@/utils/socket';
// import syncSocketAndStore from '@/utils/syncSocketAndStore';
// import 'flexboxgrid/css/flexboxgrid.min.css';
import 'vuetify/dist/vuetify.min.css';
// import { get } from '@/utils/api';
import I18N from '@/components/I18N';
import App from '@/components/App';
import router from '@/router';
import store from '@/store';

// import(/* webpackChunkName:"font-awesome-icons" */'@/utils/fontAwesomeIcons')
// 	.then(({ default: icons }) => fontawesome.library.add({ ...icons }));

store.dispatch('app/load');
sync(store, router);
// syncSocketAndStore(socket, store);

Vue.use(VueMasonry);
Vue.use(VueI18N);
Vue.use(Vuetify);
Vue.use(VeeValidate, {
	fieldsBagName: 'fieldsBag'
});

/*
 * Register some global components
 */
// Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('I18N', I18N);

const i18n = new VueI18N({
	locale: 'en',
	formatter: new class
	{
		interpolate(message, values)
		{
			Object.keys(values).forEach((key) =>
			{
				message = message.replace(new RegExp(`\\\${${key}}`, 'g'), values[key]);
			});

			return [message];
		}
	}()
});

const app = new Vue({
	router,
	store,
	i18n,
	...App
});

/*
 * Dynamically set the language when it's loaded and per user request
 */
store.watch(
	() => // This will check if the language has been changed
	{
		// Yes it's only checking a counter, but this is counting how many times it's changed because using a variable is too quick
		return store.getters['i18n/updatedCounter'];
	},
	() => // The counter has changed value
	{
		console.log(store.state.i18n);
		if(!store.state.i18n.updating) // If we've finished getting the language (ie we have it in memory)
		{
			// Updates frontend language being displayed
			app.$i18n.locale = null; // First we turn it off so the damn thing actually detects changes by Admin -.-
			app.$i18n.setLocaleMessage(store.state.i18n.locale, store.state.i18n.languages[store.state.i18n.locale]);
			app.$i18n.locale = store.state.i18n.locale;
		}
	}
);

export { app, router, store };

// import Vue from 'vue'
// import { sync } from 'vuex-router-sync'
// import Vuetify from 'vuetify'
// import App from './components/App'
// import router from './router'
// import store from './store'
// import 'vuetify/dist/vuetify.min.css'
//
// sync(store, router);
//
// Vue.use(Vuetify);
//
// const app = new Vue({
// 	router,
// 	store,
// 	...App
// });
//
// export { app, router, store }
