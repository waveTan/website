import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/pages/Index';
import About from '@/views/pages/About';
import LegalTerms from '@/views/pages/legal/Terms';
import LegalPrivacy from '@/views/pages/legal/Privacy';
import PageNotFound from '@/views/pages/PageNotFound';

Vue.use(Router);

const routeConfig = [
	{
		name: 'home',
		path: '/',
		component: Index
		// redirect: { name: 'nodes.calculator' }
	},
	{
		name: 'about',
		path: '/about',
		component: About
	},
	{
		name: 'legal.terms',
		path: '/legal/terms',
		component: LegalTerms
	},
	{
		name: 'legal.privacy',
		path: '/legal/privacy',
		component: LegalPrivacy
	},
	{
		path: '*',
		component: PageNotFound
	}
];

const router = new Router({
	mode: 'history',
	routes: routeConfig
});

router.beforeEach(async (to, from, next) =>
{
	// document.title = to.meta.title(to);
	window.scrollTo(0, 0);
	next();
});

export default router;

export { routeConfig };
