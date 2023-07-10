import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import useLocalStorage from '../layout/hooks/useLocalStorage';

const FobContext = createContext();
const defaultSettings = {
	onToggleLayout: () => {},
	onToggleStretch: () => {},
	themeContrast: 'bold',
	themeLayout: 'vertical',
	themeStretch: true
};

const FobProvider = ({ children, ...props }) => {
	const [settings, setSettings] = useLocalStorage('settings', defaultSettings);
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

	const memoizedValue = useMemo(
		() => ({
			...props,
			...settings,
			themeContrast: 'bold',
			onToggleLayout,
			onToggleStretch,
			onToggleContrast,
			setThemeLayout,
			setThemeStretch
		}),
		[
			props,
			settings,
			onToggleLayout,
			onToggleStretch,
			onToggleContrast,
			setThemeLayout,
			setThemeStretch
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
