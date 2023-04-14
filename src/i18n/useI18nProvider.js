import { useMemo } from "react";
import createI18nProvider from "./createI18nProvider";

const useI18nProvider = ({ apiUrl, locale = "en", languages = {} }) => {
  const memoizedFn = useMemo(
    () => createI18nProvider({ apiUrl, locale, languages }),
    [apiUrl, locale, languages]
  );
  return memoizedFn;
};
export default useI18nProvider;
