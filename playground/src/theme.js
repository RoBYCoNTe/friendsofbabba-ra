import { palette } from "ra-friendsofbabba";

import { alpha } from "@mui/material";

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const themeMode = prefersDarkMode.matches ? "dark" : "light";
const themePalette = palette(themeMode);

export const presets = {
	default: {
		name: "default",
		...themePalette.primary,
	},
	cyan: {
		name: "cyan",
		lighter: "#CCF4FE",
		light: "#68CDF9",
		main: "#078DEE",
		dark: "#0351AB",
		darker: "#012972",
		contrastText: "#FFFFFF",
	},
	purple: {
		name: "purple",
		lighter: "#EBD6FD",
		light: "#B985F4",
		main: "#7635dc",
		dark: "#431A9E",
		darker: "#200A69",
		contrastText: "#FFFFFF",
	},
	blue: {
		name: "blue",
		lighter: "#D1E9FC",
		light: "#76B0F1",
		main: "#2065D1",
		dark: "#103996",
		darker: "#061B64",
		contrastText: "#FFFFFF",
	},
	orange: {
		name: "orange",
		lighter: "#FEF4D4",
		light: "#FED680",
		main: "#fda92d",
		dark: "#B66816",
		darker: "#793908",
		contrastText: themePalette.grey[800],
	},
	red: {
		name: "red",
		lighter: "#FFE3D5",
		light: "#FFC1AC",
		main: "#FF3030",
		dark: "#B71833",
		darker: "#7A0930",
		contrastText: "#FFFFFF",
	},
};

const presetsColor = presets["purple"]; // Purple
const theme = {
	mode: themeMode,
	palette: {
		primary: presetsColor,
	},
	customShadows: {
		primary: `0 8px 16px 0 ${alpha(presetsColor.main, 0.24)}`,
	},
};

export default theme;
