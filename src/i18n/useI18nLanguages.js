import { useEffect, useState } from 'react';

const useI18nLanguages = ({
	apiUrl,
	endpoint = '/languages/load',
	mapper = ({ data }) => ({ data })
}) => {
	const [data, setData] = useState({ loading: true, languages: null });
	useEffect(() => {
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		fetch(`${apiUrl}${endpoint}`, { headers })
			.then((response) => response.json())
			.then((response) => setData({ loading: false, ...mapper(response) }));
	}, [apiUrl, endpoint, mapper]);

	return data;
};

export default useI18nLanguages;
