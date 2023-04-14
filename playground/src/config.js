import logo from './assets/img/logo.png';

let environment = "PRODUCTION";
let appUrl = `//${document.location.host}/`;
if (appUrl.endsWith(":3000/")) {
	appUrl = "https://crm.incisor.it.ddev.site/";
	environment = "DEVELOPER";
}
export const APP_URL = appUrl;
export const API_URL = `${APP_URL}api`;
export const DRAWER_WIDTH = 270;
export const ENVIRONMENT = environment;
export const RECAPTCHA_SITE_KEY = "?";

export const FILE_FIELDS = [
	"media_collection",
	"media",
	"logo",
	"meta_image",
	"background_image",
];

export const fobConfig = {
	logo,
	logoSx: {
		width: 180,
	},
	menuGroups: ["notifications", "users", "settings"],
	// menu: <MyMenu />,
	// menuBottom: <MyMenuBottom />,
};
