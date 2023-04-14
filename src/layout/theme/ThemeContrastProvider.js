import React, { useMemo } from 'react';

import merge from 'lodash/merge';
import PropTypes from 'prop-types';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  useTheme,
} from '@mui/material/styles';

import { useFobContext } from '../../context';

const ThemeContrastProvider = ({ children }) => {
	const outerTheme = useTheme();
	const { themeContrast } = useFobContext();
	const isLight = outerTheme.mode === "light";
	const isContrastBold = themeContrast === "bold";
	const themeOptions = useMemo(
		() => ({
			palette: {
				background: {
					...(isContrastBold && {
						default: isLight
							? outerTheme.palette.grey[100]
							: outerTheme.palette.grey[900],
					}),
				},
			},
			components: {
				MuiCard: {
					styleOverrides: {
						...(isContrastBold && {
							root: {
								boxShadow: outerTheme.customShadows.z4,
							},
						}),
					},
				},
			},
		}),

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isLight, themeContrast]
	);

	const theme = createTheme(merge(outerTheme, themeOptions));

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

ThemeContrastProvider.propTypes = {
	children: PropTypes.node,
};

export default ThemeContrastProvider;
