import React from 'react';

import {
  Admin,
  createI18nProvider,
  CrudProvider,
  CrudResource,
  Layout,
  LoginPage,
  useAuthProvider,
  useDataProvider,
  useI18nCatcher,
  useI18nLanguages,
} from 'ra-friendsofbabba';
import { QueryClient } from 'react-query';

import * as Components from './component';
import {
  API_URL,
  FILE_FIELDS,
  fobConfig,
} from './config';
import resources from './resources';
import theme from './theme';

const App = () => {
	const apiUrl = API_URL;
	const languages = useI18nLanguages({ apiUrl });

	// Allow i18n to intercept and send unlocalized messages to the server.
	useI18nCatcher({ apiUrl, loading: languages?.loading });

	const authProvider = useAuthProvider({ apiUrl });
	const dataProvider = useDataProvider({
		apiUrl,
		// List of media fields that needs to be uploaded.
		fileFields: FILE_FIELDS,
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	if (languages?.loading) {
		return null;
	}

	return (
		<CrudProvider apiUrl={apiUrl} components={Components}>
			<Admin
				theme={theme}
				layout={Layout}
				fob={fobConfig}
				loginPage={<LoginPage />}
				queryClient={queryClient}
				dataProvider={dataProvider}
				authProvider={authProvider}
				i18nProvider={createI18nProvider({
					languages: languages.data,
					locale: "it",
				})}
			>
				{resources.map((resource) => (
					<CrudResource key={resource.name} {...resource} />
				))}
			</Admin>
		</CrudProvider>
	);
};

export default App;
