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
	themeContrast: "bold",
	themeLayout: "horizontal",
	themeStretch: true,
};

const FobProvider = ({ children, ...props }) => {
	const [settings, setSettings] = useLocalStorage("settings", defaultSettings);
	// Layout
	const onToggleLayout = useCallback(() => {
		const themeLayout =
			settings.themeLayout === "vertical" ? "mini" : "vertical";
		setSettings({ ...settings, themeLayout });
	}, [setSettings, settings]);
	// Stretch
	const onToggleStretch = useCallback(() => {
		const themeStretch = !settings.themeStretch;
		setSettings({ ...settings, themeStretch });
	}, [setSettings, settings]);
	// Contrast
	const onToggleContrast = useCallback(() => {
		const themeContrast =
			settings.themeContrast === "default" ? "bold" : "default";
		setSettings({ ...settings, themeContrast });
	}, [setSettings, settings]);

	const memoizedValue = useMemo(
		() => ({
			...props,
			...settings,
			themeContrast: "bold",
			onToggleLayout,
			onToggleStretch,
			onToggleContrast,
		}),
		[props, settings, onToggleLayout, onToggleStretch, onToggleContrast]
	);

	return (
		<FobContext.Provider value={memoizedValue}>{children}</FobContext.Provider>
	);
};

FobProvider.defaultProps = {
	settings: defaultSettings,
};

const useFobContext = () => useContext(FobContext);

export { FobContext, FobProvider, useFobContext };
