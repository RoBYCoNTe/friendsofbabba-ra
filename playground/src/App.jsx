import React from 'react';

import {
  Admin,
  createI18nProvider,
  CrudProvider,
  CrudResource,
  LoginPage,
  useAuthProvider,
  useDataProvider,
  useI18nCatcher,
  useI18nLanguages,
  WorkflowProvider,
} from 'ra-friendsofbabba';
import { Resource } from 'react-admin';
import { QueryClient } from 'react-query';

import {
  CategoryOutlined,
  DockOutlined,
  FlagOutlined,
  HelpOutline,
  HelpRounded,
  NotificationImportant,
  PeopleAltOutlined,
  Textsms,
} from '@mui/icons-material';

import * as Components from './component';
import Layout from './component/Layout';
import Logo from './component/Logo';
import {
  API_URL,
  FILE_FIELDS,
} from './config';
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
		<WorkflowProvider apiUrl={apiUrl}>
			<CrudProvider apiUrl={apiUrl} components={Components}>
				<Admin
					theme={theme}
					layout={Layout}
					loginPage={<LoginPage logo={Logo} />}
					queryClient={queryClient}
					dataProvider={dataProvider}
					authProvider={authProvider}
					i18nProvider={createI18nProvider({
						languages: languages.data,
						locale: "it",
					})}
				>
					<CrudResource
						name="posts"
						icon={DockOutlined}
						options={{
							label: "Aliases",
							group: "blog",
							order: 1,
						}}
					/>
					<CrudResource
						name="blog-posts"
						options={{
							group: "blog",
						}}
						icon={DockOutlined}
					/>
					<CrudResource
						name="blog-post-taxonomies"
						options={{
							group: "blog",
						}}
					/>
					<CrudResource
						name="tickets"
						options={{
							group: "dashboard",
						}}
						icon={HelpOutline}
					/>
					<CrudResource
						name="ticket-types"
						options={{
							group: "admin",
						}}
						icon={HelpRounded}
					/>
					<Resource name="workflow/transactions/blog-posts" />
					<Resource name="workflow/transactions/tickets" />
					<CrudResource
						name="blog-post-comments"
						options={{
							group: "blog",
						}}
						icon={Textsms}
					/>
					<CrudResource
						name="blog-categories"
						group="blog"
						options={{
							group: "blog",
						}}
						icon={CategoryOutlined}
					/>

					<CrudResource
						name="notifications"
						options={{
							group: "dashboard",
						}}
						icon={NotificationImportant}
					/>

					<Resource name="roles" />
					<Resource name="languages" />
					<CrudResource
						name="users"
						icon={PeopleAltOutlined}
						options={{
							group: "admin",
							roles: ["admin"],
						}}
					/>
					<CrudResource
						name="language-messages"
						options={{
							group: "admin",
							roles: ["admin"],
						}}
						icon={FlagOutlined}
					/>
					<CrudResource
						name="commands"
						options={{
							group: "admin",
							roles: ["admin"],
						}}
					/>
					<CrudResource
						name="command-logs"
						options={{
							group: "admin",
							roles: ["admin"],
						}}
					/>
					<CrudResource
						name="command-log-rows"
						options={{
							group: "admin",
							roles: ["admin"],
						}}
					/>
				</Admin>
			</CrudProvider>
		</WorkflowProvider>
	);
};

export default App;
