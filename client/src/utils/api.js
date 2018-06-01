import axios from 'axios';
import store from '@/store';

// An instance for general backend stuff
// const instance = axios.create({
// 	baseURL: API
// });

// An instance scoped ONLY to the API endpoints. Use this 99% of the time
const apiInstance = axios.create({
	baseURL: String(`${API}api/${API_VERSION}`)
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
