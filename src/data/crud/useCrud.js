import { useCallback, useEffect } from 'react';

import { getToken } from '../authHeaders';
import load from './load';
import { useSafeSetState } from 'react-admin';

const useCrud = ({ apiUrl, endpoint, responseDataMapper }) => {
	const [{ loaded, loading, data, token }, setData] = useSafeSetState({
		loading: false,
		loaded: false,
		data: [],
		token: getToken()
	});
	const handleLogin = useCallback(
		(e) => {
			if (token !== e.value) {
				setData((d) => ({ ...d, token: e.value, loaded: false }));
			}
		},
		[setData, token]
	);
	useEffect(
		() => document.addEventListener('login', handleLogin),
		[handleLogin]
	);

	useEffect(() => {
		const loadAll = ({ apiUrl, token }) => {
			if (loaded || loading || token === null) {
				return;
			}

			setData({ loading: true });
			load({ apiUrl, token, endpoint, responseDataMapper }).then((data) =>
				setData({ loaded: true, loading: false, data })
			);
		};
		const token = getToken();
		loadAll({ apiUrl, token });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [apiUrl, token]);

	return { loaded, loading, data };
};
export default useCrud;
