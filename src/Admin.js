import React from 'react';

import { AdminUI, defaultI18nProvider, localStorageStore } from 'react-admin';

import AdminContext from './AdminContext';

const Admin = (props) => {
	const {
		authProvider,
		basename,
		catchAll,
		children,
		dashboard,
		dataProvider,
		disableTelemetry,
		history,
		i18nProvider,
		layout,
		loading,
		loginPage,
		authCallbackPage,
		menu, // deprecated, use a custom layout instead
		notification,
		queryClient,
		requireAuth,
		store,
		ready,
		theme,
		title = 'React Admin',
		// Custom prop
		fob
	} = props;

	if (loginPage === true && process.env.NODE_ENV !== 'production') {
		console.warn(
			'You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it'
		);
	}

	const email = localStorage.getItem('email');
	const profile = JSON.parse(localStorage.getItem('profile'));
	const defaultStore = localStorageStore(
		undefined,
		`_user_${profile?.user_id}` || email
	);

	return (
		<AdminContext
			authProvider={authProvider}
			basename={basename}
			dataProvider={dataProvider}
			i18nProvider={i18nProvider}
			store={store || defaultStore}
			history={history}
			queryClient={queryClient}
			theme={theme}
			fob={fob}
		>
			<AdminUI
				layout={layout}
				dashboard={dashboard}
				disableTelemetry={disableTelemetry}
				menu={menu}
				catchAll={catchAll}
				title={title}
				loading={loading}
				loginPage={loginPage}
				authCallbackPage={authCallbackPage}
				notification={notification}
				requireAuth={requireAuth}
				ready={ready}
			>
				{children}
			</AdminUI>
		</AdminContext>
	);
};

Admin.defaultProps = {
	i18nProvider: defaultI18nProvider,
	store: undefined
};

export default Admin;
