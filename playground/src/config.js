let environment = 'PRODUCTION';
let appUrl = `//${document.location.host}/`;
if (appUrl.endsWith(':3000/')) {
	appUrl = 'https://friendsofbabba-core-sample.ddev.site/';
	environment = 'DEVELOPER';
}
export const APP_URL = appUrl;
export const API_URL = `${APP_URL}api`;
export const ENVIRONMENT = environment;
export const RECAPTCHA_SITE_KEY = '?';

export const FILE_FIELDS = ['media_collection', 'media', 'thumbnail', 'avatar'];
