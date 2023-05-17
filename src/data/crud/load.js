import { validateJson } from '../createAuthProvider';

const load = async ({ apiUrl, token, endpoint, responseDataMapper }) => {
	let headers = new Headers();
	headers.append('Accept', 'application/json');
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', `Bearer ${token}`);

	return fetch(`${apiUrl}${endpoint}`, {
		headers
	})
		.then((response) => response.json())
		.then(validateJson)
		.then(responseDataMapper);
};
export default load;
