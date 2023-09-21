import React, { useMemo } from 'react';

import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import { useTheme } from 'react-admin';

import { CssBaseline } from '@mui/material';
import {
  alpha,
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

import { useFobContext } from '../../context/FobContext';
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import { componentsOverride } from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const AUTO_THEME_MODE = prefersDarkMode.matches ? 'dark' : 'light';

const contrast = (contrastBold, mode) => {
	const theme = {
		...(contrastBold &&
			mode === 'light' && {
				palette: {
					background: {
						default: palette(mode).grey[200]
					}
				}
			})
	};

	const components = {
		...(contrastBold && {
			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: customShadows(mode).z4
					}
				}
			}
		})
	};

	return {
		theme,
		components
	};
};

const darkMode = (mode) => {
	const theme = {
		palette: palette(mode),
		shadows: shadows(mode),
		customShadows: customShadows(mode)
	};

	return theme;
};

const presets = (primary) => {
	const theme = {
		palette: {
			primary
		},
		customShadows: {
			primary: `0 8px 16px 0 ${alpha(`${primary?.main}`, 0.24)}`
		}
	};

	return theme;
};

const ThemeProvider = ({ theme: overrideTheme, children }) => {
	const {
		themeMode: fobThemeMode,
		themePreset,
		themeContrast
	} = useFobContext();
	const [_theme] = useTheme();
	const defaultThemeMode = _theme?.mode;
	const themeMode = useMemo(() => {
		if (fobThemeMode === 'auto') {
			return AUTO_THEME_MODE;
		} else if (fobThemeMode === 'dark' || fobThemeMode === 'light') {
			return fobThemeMode;
		} else {
			return defaultThemeMode;
		}
	}, [fobThemeMode, defaultThemeMode]);

	const contrastOption = contrast(themeContrast === 'bold', themeMode);
	const contrastOptionTheme = contrastOption.theme;
	const darkModeOption = darkMode(themeMode);
	const presetsOption = presets(themePreset);

	const baseOptions = useMemo(
		() => ({
			palette: palette('light'),
			shadows: shadows('light'),
			customShadows: customShadows('light'),
			typography,
			shape: { borderRadius: 8 }
		}),
		[]
	);

	const themeOptions = useMemo(
		() =>
			merge(
				// Base
				baseOptions,
				// Dark mode
				darkModeOption,
				// Preset option
				presetsOption,
				// Contrast option
				contrastOptionTheme,
				// Override theme
				overrideTheme
			),
		[
			baseOptions,
			darkModeOption,
			presetsOption,
			contrastOptionTheme,
			overrideTheme
		]
	);

	const theme = createTheme(themeOptions);
	theme.components = merge(
		componentsOverride(theme),
		contrastOption.components,
		overrideTheme?.components
	);

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
	children: PropTypes.node
};

export default ThemeProvider;
