import { stringify } from 'query-string';

import { getHeaders } from './authHeaders';
import defaultPrepareData from './cakephp/createDataFormatter';
import createFilesParser from './createFilesParser';
import { fetchJson } from './fetch';

const createDataProvider = ({
	apiUrl,
	fileFields = [],
	filesParser = createFilesParser(),
	prepareData = (data) => defaultPrepareData(data)
}) => ({
	getInfo: (resource, params) => {
		const url = `${apiUrl}/${resource}/info?${stringify(params)}`;
		const options = { headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json.data
		}));
	},
	getBadges: () => {
		const url = `${apiUrl}/stats/badges`;
		const options = { headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json
		}));
	},
	getList: (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;

		const filter = Object.keys(params.filter || {}).reduce(
			(f, filterName) => ({
				...f,
				[filterName]:
					params.filter[filterName] instanceof Array
						? params.filter[filterName].join(',')
						: params.filter[filterName]
			}),
			{}
		);

		const query = {
			sort: field,
			direction: order,
			page: page,
			limit: perPage,
			...filter
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		const options = { headers: getHeaders() };

		return fetchJson(url, options).then(({ json }) => ({
			data: json.data,
			total: parseInt(json.pagination.count, 10)
		}));
	},
	getOne: (resource, params) => {
		let url = `${apiUrl}/${resource}` + (params.id ? `/${params.id}` : '');
		let options = { headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json.data
		}));
	},
	getMany: (resource, params) => {
		const query = {
			ids: params.ids.map((id) => (id.id ? id.id : id)).join(',')
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		const options = { headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json.data,
			total: parseInt(json.pagination.count, 10)
		}));
	},
	getManyReference: (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const filter = Object.keys(params.filter || {}).reduce(
			(f, filterName) => ({
				...f,
				[filterName]:
					params.filter[filterName] instanceof Array
						? params.filter[filterName].join(',')
						: params.filter[filterName]
			}),
			{}
		);

		const query = {
			sort: field,
			direction: order,
			page: page,
			limit: perPage,
			[params.target]: params.id,
			...filter
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		const options = { headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json.data,
			total: parseInt(json.pagination.count, 10)
		}));
	},
	create: (resource, params) =>
		filesParser(params.data, fileFields).then((data) => {
			const url = `${apiUrl}/${resource}`;
			const options = {
				method: 'POST',
				body: JSON.stringify(prepareData(data, resource, params)),
				headers: getHeaders()
			};
			return fetchJson(url, options).then(({ json }) => ({
				data: { ...(json.data || params.data), id: json.data.id }
			}));
		}),
	update: (resource, params) =>
		filesParser(params.data, fileFields).then((data) => {
			const id = data && data.pk ? data.pk : data.id;
			const url = `${apiUrl}/${resource}` + (id ? `/${id}` : '');
			const options = {
				method: 'PUT',
				body: JSON.stringify(prepareData(data)),
				headers: getHeaders()
			};
			return fetchJson(url, options).then(({ json }) => ({
				data: { ...(json.data || params.data), id: json.data.id }
			}));
		}),
	updateMany: (resource, params) => {
		return Promise.all(
			params.ids.map((id) =>
				fetchJson(`${apiUrl}/${resource}/${id}`, {
					method: 'PUT',
					body: JSON.stringify(params.data),
					headers: getHeaders()
				})
			)
		).then((responses) => ({
			data: responses.map((response) => response.json)
		}));
	},
	delete: (resource, params) => {
		const url = `${apiUrl}/${resource}/${params.id}`;
		const options = { method: 'DELETE', headers: getHeaders() };
		return fetchJson(url, options).then(({ json }) => ({
			data: json
		}));
	},
	deleteMany: (resource, params) => {
		const url = `${apiUrl}/${resource}/delete-all`;
		const options = {
			method: 'DELETE',
			headers: getHeaders(),
			body: JSON.stringify({
				id: params?.ids || []
			})
		};
		return fetchJson(url, options).then(({ json }) => json);
	},
	deleteManyPromise: (resource, params) => {
		return Promise.all(
			params.ids.map((id) =>
				fetch(`${apiUrl}/${resource}/${id}`, {
					method: 'DELETE',
					headers: getHeaders()
				}).then((response) => response.json())
			)
		).then((responses) => {
			let errors = responses.filter(
				(r) =>
					r.data && r.data.code && (r.data.code === 409 || r.data.code === 403)
			);
			if (errors.length > 0) {
				return Promise.reject(errors.map((e) => e.data.message).join('\n'));
			}

			return {
				data: responses.map(({ json }) => ({ data: json }))
			};
		});
	},
	post(resource, params) {
		const url = `${apiUrl}/${resource}`;
		const options = {
			body: JSON.stringify(params),
			method: 'POST',
			headers: getHeaders()
		};
		return fetchJson(url, options).then(({ json }) => ({ data: json }));
	},
	get(resource, params) {
		const queryString = stringify(params);
		const url = `${apiUrl}/${resource}?${queryString}`;
		const options = {
			method: 'GET',
			headers: getHeaders()
		};
		return fetchJson(url, options).then(({ json }) => ({ data: json }));
	}
});

export default createDataProvider;
