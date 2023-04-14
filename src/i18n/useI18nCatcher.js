import * as React from "react";

import { useLocale } from "react-admin";

const queued = [];

const putMessage = (apiUrl, locale, message) =>
  message != null &&
  message !== "undefined" &&
  message.indexOf("[") === -1 &&
  message.indexOf("]") === -1 &&
  queued.indexOf(`${locale}-${message}`) === -1 &&
  queued.push(`${locale}-${message}`) &&
  fetch(`${apiUrl}/languages/put-message`, {
    method: "PUT",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      code: locale,
      message: {
        code: message,
        text: message,
      },
    }),
  });

const useI18nCatcher = ({ apiUrl, loading }) => {
  const locale = useLocale();
  React.useMemo(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }
    if (loading) {
      return;
    }

    const consoleError = console.error;

    console.error = function (message) {
      if (
        typeof message === "string" &&
        message.indexOf("Missing translation for key: ") >= 0
      ) {
        message = message.replace("Warning: Missing translation for key: ", "");
        message = message.split('"').join("").trim();
        if (
          message === null ||
          message.indexOf(" ") !== -1 ||
          message.indexOf(".") === -1
        ) {
          return;
        }

        const lc = localStorage.getItem("locale") || locale;
        putMessage(apiUrl, lc, message);
        return;
      }

      consoleError.apply(console, arguments);
    };
  }, [apiUrl, locale, loading]);
  return true;
};

export default useI18nCatcher;
