import { get } from "lodash";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { resolveBrowserLocale } from "react-admin";

const createI18nProvider = ({ locale = "en", languages }) =>
	polyglotI18nProvider(() => {
		if (process.env.NODE_ENV !== "production") {
			localStorage.setItem("locale", locale);
		}
		return get(languages, locale, {});
	}, resolveBrowserLocale());

export default createI18nProvider;
