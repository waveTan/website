import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import LegalTerms from '@/views/pages/legal/Terms';
import LegalPrivacy from '@/views/pages/legal/Privacy';
import PageNotFound from '@/views/pages/PageNotFound';
import Index from '@/views/pages/Index';
import About from '@/views/pages/About';
import Partners from '@/views/pages/Partners';
import DApps from '@/views/pages/DApps';
import DAppItem from '@/views/pages/dApps/Item';
import Team from '@/views/pages/Team';
import Jobs from '@/views/pages/Jobs';
import Contact from '@/views/pages/Contact';
import Articles from '@/views/pages/Articles';
import ArticlesItem from '@/views/pages/Articles/Item';
import Wallet from '@/views/pages/Wallet';
import FAQ from '@/views/pages/FAQ';
import Papers from '@/views/pages/Papers';

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
		name: 'dAppItem',
		path: '/dApps/:id/:title',
		component: DAppItem
	},
	{
		name: 'team',
		path: '/team',
		component: Team
	},
	{
		name: 'jobs',
		path: '/jobs',
		component: Jobs
	},
	{
		name: 'contact',
		path: '/contact',
		component: Contact
	},
	{
		name: 'news',
		path: '/news',
		component: Articles,
		props: {
			category: 'news'
		}
	},
	{
		name: 'newsItem',
		path: '/news/:id/:title',
		component: ArticlesItem,
		props: {
			routerName: 'newsItem',
			category: 'news'
		}
	},
	{
		name: 'announcements',
		path: '/announcements',
		component: Articles,
		props: {
			category: 'announcements'
		}
	},
	{
		name: 'announcementsItem',
		path: '/announcements/:id/:title',
		component: ArticlesItem,
		props: {
			routerName: 'announcementItem',
			category: 'announcements'
		}
	},
	{
		name: 'blogs',
		path: '/blogs',
		component: Articles,
		props: {
			category: 'blogs'
		}
	},
	{
		name: 'blogsItem',
		path: '/blogs/:id/:title',
		component: ArticlesItem,
		props: {
			routerName: 'blogsItem',
			category: 'blogs'
		}
	},
	{
		name: 'faq',
		path: '/faq',
		component: FAQ
	},
	{
		name: 'papers',
		path: '/papers',
		component: Papers
	},
	{
		name: 'wallet',
		path: '/wallet',
		component: Wallet
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
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: routeConfig
});

router.beforeEach((to, from, next) =>
{
	store.dispatch('app/toggleNavigationMenu', false);
	next();
});

export default router;

export { routeConfig };
