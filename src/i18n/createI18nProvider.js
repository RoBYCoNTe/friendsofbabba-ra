import moment from "moment";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { resolveBrowserLocale } from "react-admin";
import { get } from "lodash";
const createI18nProvider = ({ locale = "en", languages }) =>
  polyglotI18nProvider(() => {
    if (process.env.NODE_ENV !== "production") {
      localStorage.setItem("locale", locale);
    }
    moment.locale(locale);
    return get(languages, locale, {});
  }, resolveBrowserLocale());

export default createI18nProvider;
