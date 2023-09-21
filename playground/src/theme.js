import { palette } from 'ra-friendsofbabba';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const themeMode = prefersDarkMode.matches ? 'dark' : 'light';
const themePalette = palette(themeMode);

// Custom presets colors
export const presets = {
	default: {
		name: 'default',
		...themePalette.primary
	},
	cyan: {
		name: 'cyan',
		lighter: '#CCF4FE',
		light: '#68CDF9',
		main: '#078DEE',
		dark: '#0351AB',
		darker: '#012972',
		contrastText: '#FFFFFF'
	}
	// Custom colors HERE
};

const theme = {
	// Custom theme modifications HERE
};

export default theme;
