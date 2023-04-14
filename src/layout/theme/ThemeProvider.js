import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { useTheme } from 'react-admin';

// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import { componentsOverride } from './overrides';
//
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const ThemeProvider = ({ theme: overrideTheme, children }) => {
	const [_theme] = useTheme(overrideTheme);
	const themeMode = _theme?.mode || "light";
	const themeOptions = useMemo(
		() => ({
			palette: palette(themeMode),
			typography,
			shape: { borderRadius: 8 },
			direction: "ltr",
			shadows: shadows(themeMode),
			customShadows: customShadows(themeMode),
		}),
		[themeMode]
	);

	const theme = createTheme(themeOptions, overrideTheme);
	theme.components = componentsOverride(theme);

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node,
};

export default ThemeProvider;
