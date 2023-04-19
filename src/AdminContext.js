import * as React from "react";

import { CoreAdminContext, defaultTheme, useLocales } from "react-admin";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import { FobProvider } from "./context";
import { ScrollToTop, ThemeProvider } from "./layout";
import ThemeContrastProvider from "./layout/theme/ThemeContrastProvider";

const AdminContext = (props) => {
	const { theme = defaultTheme, children, fob, ...rest } = props;
	const locale = useLocales();
	console.log(locale);
	return (
		<CoreAdminContext {...rest}>
			<ScrollToTop />
			<FobProvider {...fob}>
				<LocalizationProvider dateAdapter={AdapterLuxon}>
					<ThemeProvider theme={theme}>
						<ThemeContrastProvider>{children}</ThemeContrastProvider>
					</ThemeProvider>
				</LocalizationProvider>
			</FobProvider>
		</CoreAdminContext>
	);
};

AdminContext.displayName = "AdminContext";

export default AdminContext;
