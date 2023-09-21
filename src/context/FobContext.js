import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import useLocalStorage from '../layout/hooks/useLocalStorage';
import palette from '../layout/theme/palette';

const FobContext = createContext();
const defaultSettings = {
	onToggleLayout: () => {},
	onToggleStretch: () => {},
	themeColor: 'default',
	themeContrast: 'bold',
	themeLayout: 'vertical',
	themeStretch: true,
	themeMode: 'auto',
	settingsOpen: false
};

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const themeMode = prefersDarkMode.matches ? 'dark' : 'light';
const themePalette = palette(themeMode);

export const defaultPresets = {
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
	},
	purple: {
		name: 'purple',
		lighter: '#EBD6FD',
		light: '#B985F4',
		main: '#7635dc',
		dark: '#431A9E',
		darker: '#200A69',
		contrastText: '#FFFFFF'
	},
	blue: {
		name: 'blue',
		lighter: '#D1E9FC',
		light: '#76B0F1',
		main: '#2065D1',
		dark: '#103996',
		darker: '#061B64',
		contrastText: '#FFFFFF'
	},
	orange: {
		name: 'orange',
		lighter: '#FEF4D4',
		light: '#FED680',
		main: '#fda92d',
		dark: '#B66816',
		darker: '#793908',
		contrastText: themePalette.grey[800]
	},
	red: {
		name: 'red',
		lighter: '#FFE3D5',
		light: '#FFC1AC',
		main: '#FF3030',
		dark: '#B71833',
		darker: '#7A0930',
		contrastText: '#FFFFFF'
	}
};

const FobProvider = ({ children, presets = defaultPresets, ...props }) => {
	const [storedSettings, setSettings] = useLocalStorage('settings', {});
	const settings = useMemo(
		() => ({ ...defaultSettings, ...storedSettings }),
		[storedSettings]
	);

	// Layout
	const onToggleLayout = useCallback(() => {
		const themeLayout =
			settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
		setSettings({ ...settings, themeLayout });
	}, [setSettings, settings]);
	const setThemeLayout = useCallback(
		(themeLayout) => {
			setSettings((_settings) => ({ ..._settings, themeLayout }));
		},
		[setSettings]
	);
	// Stretch
	const onToggleStretch = useCallback(() => {
		setSettings((_settings) => ({
			..._settings,
			themeStretch: !_settings.themeStretch
		}));
	}, [setSettings]);
	const setThemeStretch = useCallback(
		(themeStretch) => {
			setSettings((_settings) => ({ ..._settings, themeStretch }));
		},
		[setSettings]
	);
	// Contrast
	const onToggleContrast = useCallback(() => {
		setSettings((_settings) => ({
			..._settings,
			themeContrast: _settings.themeContrast === 'default' ? 'bold' : 'default'
		}));
	}, [setSettings]);
	const setThemeContrast = useCallback(
		(themeContrast) => {
			setSettings((_settings) => ({ ..._settings, themeContrast }));
		},
		[setSettings]
	);
	// Theme mode
	const setThemeMode = useCallback(
		(themeMode) => {
			setSettings((_settings) => ({ ..._settings, themeMode }));
		},
		[setSettings]
	);
	// Toggle settings open
	const onToggleSettings = useCallback(() => {
		setSettings((_settings) => ({
			..._settings,
			settingsOpen: !_settings.settingsOpen
		}));
	}, [setSettings]);
	// Reset settings
	const onResetSettings = useCallback(() => {
		setSettings(defaultSettings);
	}, [setSettings]);
	// Set theme color
	const setThemeColor = useCallback(
		(themeColor) => {
			setSettings((_settings) => ({ ..._settings, themeColor }));
		},
		[setSettings]
	);
	// Get theme preset
	const getThemePreset = useCallback(
		(themeColor) => {
			return (
				presets?.[themeColor || settings?.themeColor] || presets['default']
			);
		},
		[presets, settings]
	);

	const memoizedValue = useMemo(
		() => ({
			...props,
			...settings,
			presets,
			themeContrast: settings?.themeContrast,
			themeMode: settings?.themeMode,
			settingsOpen: settings?.settingsOpen,
			themeLayout: settings?.themeLayout,
			themeStretch: settings?.themeStretch,
			themeColor: settings?.themeColor,
			themePreset: getThemePreset(),
			onToggleLayout,
			onToggleStretch,
			onToggleContrast,
			setThemeLayout,
			setThemeStretch,
			setThemeMode,
			setThemeContrast,
			onToggleSettings,
			onResetSettings,
			setThemeColor,
			getThemePreset
		}),
		[
			props,
			settings,
			presets,
			onToggleLayout,
			onToggleStretch,
			onToggleContrast,
			setThemeLayout,
			setThemeStretch,
			setThemeMode,
			onToggleSettings,
			setThemeContrast,
			onResetSettings,
			setThemeColor,
			getThemePreset
		]
	);

	return (
		<FobContext.Provider value={memoizedValue}>{children}</FobContext.Provider>
	);
};

FobProvider.defaultProps = {
	settings: defaultSettings
};

const useFobContext = () => useContext(FobContext);

export { FobContext, FobProvider, useFobContext };
