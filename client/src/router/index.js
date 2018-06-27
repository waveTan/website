import Vue from 'vue';
import Router from 'vue-router';
import LegalTerms from '@/views/pages/legal/Terms';
import LegalPrivacy from '@/views/pages/legal/Privacy';
import PageNotFound from '@/views/pages/PageNotFound';
import Index from '@/views/pages/Index';
import About from '@/views/pages/About';
import Partners from '@/views/pages/Partners';
import DApps from '@/views/pages/DApps';
import Team from '@/views/pages/Team';

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
		name: 'partners',
		path: '/partners',
		component: Partners
	},
	{
		name: 'dApps',
		path: '/dApps',
		component: DApps
	},
	{
		name: 'team',
		path: '/team',
		component: Team
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
