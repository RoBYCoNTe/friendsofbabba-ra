import * as React from 'react';

import { useLocaleState } from 'react-admin';

const queued = [];

const putMessage = ({ apiUrl, endpoint, locale, message, bodyBuilder }) =>
	message != null &&
	message !== 'undefined' &&
	message.indexOf('[') === -1 &&
	message.indexOf(']') === -1 &&
	queued.indexOf(`${locale}-${message}`) === -1 &&
	queued.push(`${locale}-${message}`) &&
	fetch(`${apiUrl}${endpoint}`, {
		method: 'PUT',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(bodyBuilder(locale, message))
	});

const useI18nCatcher = ({
	apiUrl,
	endpoint = '/languages/put-message',
	loading,
	bodyBuilder = (locale, message) => ({
		code: locale,
		message: {
			code: message,
			text: message
		}
	})
}) => {
	const locale = useLocaleState();
	React.useMemo(() => {
		if (process.env.NODE_ENV === 'production') {
			return;
		}
		if (loading) {
			return;
		}

		const consoleError = console.error;

		console.error = function (message) {
			if (typeof message === 'string' && message === '%c%s') {
				return;
			}
			if (
				typeof message === 'string' &&
				message.indexOf('Missing translation for key: ') >= 0
			) {
				message = message.replace('Warning: Missing translation for key: ', '');
				message = message.split('"').join('').trim();
				if (
					message === null ||
					message.indexOf(' ') !== -1 ||
					message.indexOf('.') === -1
				) {
					return;
				}

				const lc = localStorage.getItem('locale') || locale;
				putMessage({ apiUrl, endpoint, locale: lc, message, bodyBuilder });
				return;
			}

			consoleError.apply(console, arguments);
		};
	}, [apiUrl, locale, loading, bodyBuilder, endpoint]);
	return true;
};

export default useI18nCatcher;
