import * as React from 'react';

import { CoreAdminContext, defaultTheme } from 'react-admin';

import { FobProvider } from './context';
import { ScrollToTop, ThemeProvider } from './layout';

const AdminContext = (props) => {
	const { theme = defaultTheme, children, fob, ...rest } = props;
	return (
		<CoreAdminContext {...rest}>
			<ScrollToTop />
			<FobProvider {...fob}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</FobProvider>
		</CoreAdminContext>
	);
};

AdminContext.displayName = 'AdminContext';

export default AdminContext;
