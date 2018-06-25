import axios from 'axios';
import store from '@/store';

/**
 * This is not the best way of doing this since we're just duplicating an entire file
 * just to change the `baseURL` path
 *
 * TODO Undo duplication of code in `/src/utils/api.js` and `/src/utils/apit-strapi.js`
 */

const apiInstance = axios.create({
	baseURL: String(`${process.env.STRAPI}`)
});

// Convenience functions
const get = (url, data = {}) =>
{
	store.dispatch('app/startLoading');

	return apiInstance.get(url, data)
		.then((res) =>
		{
			store.dispatch('app/stopLoading');

			return res;
		})
		.catch((error) =>
		{
			store.dispatch('app/stopLoading');

			throw error;
		});
};

const post = (url, data = {}) =>
{
	store.dispatch('app/startLoading');

	return apiInstance.post(url, data)
		.then((res) =>
		{
			store.dispatch('app/stopLoading');

			return res;
		})
		.catch((error) =>
		{
			store.dispatch('app/stopLoading');

			throw error;
		});
};

const put = (url, data = {}) =>
{
	store.dispatch('app/startLoading');

	return apiInstance.put(url, data)
		.then((res) =>
		{
			store.dispatch('app/stopLoading');

			return res;
		})
		.catch((error) =>
		{
			store.dispatch('app/stopLoading');

			throw error;
		});
};

const patch = (url, data = {}) =>
{
	store.dispatch('app/startLoading');

	return apiInstance.patch(url, data)
		.then((res) =>
		{
			store.dispatch('app/stopLoading');

			return res;
		})
		.catch((error) =>
		{
			store.dispatch('app/stopLoading');

			throw error;
		});
};

const destroy = (url, data = {}) =>
{
	store.dispatch('app/startLoading');

	return apiInstance.delete(url, data)
		.then((res) =>
		{
			store.dispatch('app/stopLoading');

			return res;
		})
		.catch((error) =>
		{
			store.dispatch('app/stopLoading');

			throw error;
		});
};

export { get, post, put, patch, destroy };
