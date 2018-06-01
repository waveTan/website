import '@/promisePolyfill';
import pwa from '@/pwa';
import { app } from './app';

// Enable progressive web app support (with offline-plugin)
if(process.env.NODE_ENV === 'production')
{
	pwa.run();
}

app.$mount('#app');
