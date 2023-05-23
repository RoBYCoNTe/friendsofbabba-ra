import { useCallback } from 'react';

import { useAuthProvider, useNotify, useRedirect } from 'react-admin';

import { getHeaders, notifyToken } from './authHeaders';

export const clearAuth = () => {
	['token', 'roles', 'username', 'profile', 'email'].forEach((param) => {
		localStorage.removeItem(`admin_${param}`);
		localStorage.removeItem(param);
	});
};

export const validateJson = (data) => {
	if (!data?.success && data?.data?.code === 401) {
		clearAuth();
		document.location.reload();
	}
	return data;
};

export const useIsImpersonating = () => {
	const impersonate = localStorage.getItem('impersonate');
	return impersonate === 'true';
};

export const useDoImpersonate = (id) => {
	const authProvider = useAuthProvider();
	const redirect = useRedirect();
	const notify = useNotify();
	const handle = useCallback(
		() =>
			authProvider
				.impersonate(id)
				.then(() => {
					notify('ra.auth.sign_in_success', 'info');
					redirect('/');
					setTimeout(() => window.location.reload(), 1000);
				})
				.catch(() => {
					notify('ra.auth.sign_in_error', 'warning');
				}),
		[authProvider, notify, redirect, id]
	);
	return handle;
};

export const useUndoImpersonate = () => {
	const authProvider = useAuthProvider();
	const redirect = useRedirect();
	const notify = useNotify();
	const handleImpersonateLogout = useCallback(
		() =>
			authProvider
				.stopImpersonate()
				.then(() => {
					redirect('/');
					notify('ra.auth.sign_out_success', 'info');
					setTimeout(() => document.location.reload(), 1000);
				})
				.catch((error) => notify(error, 'warning')),
		[authProvider, redirect, notify]
	);
	return handleImpersonateLogout;
};

const createAuthProvider = ({ apiUrl }) => ({
	login: (params) => {
		const { username, password } = params;
		const requestURL = `${apiUrl}/users/login`;
		const request = new Request(requestURL, {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: new Headers({
				'Content-Type': 'application/json',
				Accept: 'application/json'
			})
		});
		return fetch(request)
			.then((response) => response.json())
			.then(({ data, success }) => {
				if (!success) {
					throw new Error(data.message);
				}
				localStorage.setItem('email', data.email);
				localStorage.setItem('token', data.token);
				localStorage.setItem('roles', JSON.stringify(data.roles));
				localStorage.setItem('profile', JSON.stringify(data.profile));
				localStorage.setItem('avatar', data.avatar);
				notifyToken(data.token);
			});
	},
	logout: () => {
		clearAuth();
		return Promise.resolve();
	},
	checkAuth: () =>
		localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
	checkError: (error) => {
		if (error.status === 401 || error.status === 500) {
			return Promise.reject(error?.message);
		}
		return Promise.resolve();
	},
	getPermissions: () => {
		let roles = JSON.parse(localStorage.getItem('roles'));
		return Promise.resolve(
			roles.reduce((acc, role) => {
				acc.push(role.code);
				return acc;
			}, [])
		);
	},

	getIdentity: () => {
		const profile = JSON.parse(localStorage.getItem('profile'));
		const roles = JSON.parse(localStorage.getItem('roles'));
		const email = localStorage.getItem('email');
		const avatar = localStorage.getItem('avatar');
		return Promise.resolve({
			...profile,
			avatar,
			roles,
			email
		});
	},

	impersonate: (id) => {
		const requestURL = `${apiUrl}/users/impersonate/?id=${id}`;
		const request = new Request(requestURL, {
			method: 'POST',
			headers: getHeaders()
		});
		return fetch(request)
			.then((response) => response.json())
			.then(({ success, data }) => {
				if (!success) {
					throw new Error(data.message);
				}
				['token', 'roles', 'username', 'profile', 'email', 'avatar'].forEach(
					(param) => {
						const toSaveParam = `admin_${param}`;
						localStorage.setItem(toSaveParam, localStorage.getItem(param));
						localStorage.setItem(
							param,
							['profile', 'roles'].indexOf(param) !== -1
								? JSON.stringify(data[param])
								: data[param]
						);
					}
				);
				localStorage.setItem('impersonate', true);
			});
	},
	stopImpersonate() {
		['token', 'roles', 'username', 'profile', 'email', 'avatar'].forEach(
			(param) => {
				const savedParam = `admin_${param}`;
				localStorage.setItem(param, localStorage.getItem(savedParam));
				localStorage.removeItem(savedParam);
			}
		);
		localStorage.setItem('impersonate', false);
		return Promise.resolve();
	}
});

export default createAuthProvider;
