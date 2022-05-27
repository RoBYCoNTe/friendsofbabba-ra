import React, { useCallback, useEffect } from "react";

import { useInput } from "ra-core";

const addScript = ({ src, id, onLoad }) => {
  const existing = document.getElementById(id);
  if (existing) {
    return existing;
  } else {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = () => {
      if (onLoad) {
        onLoad();
      }
    };
    document.body.appendChild(script);
    return script;
  }
};
const removeScript = ({ id }) => {
  const script = document.getElementById(id);
  if (script) {
    document.body.removeChild(script);
  }
};

const RecaptchaInput = ({ siteKey, reset, ...props }) => {
  const {
    input: { onChange },
  } = useInput({ ...props });
  useEffect(() => {
    addScript({
      src: `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
      id: "recaptcha-api",
      onLoad: () => {
        // eslint-disable-next-line no-undef
        grecaptcha.ready(function () {
          // eslint-disable-next-line no-undef
          grecaptcha.execute(siteKey, { action: "submit" }).then(onChange);
        });
      },
    });
    return () => removeScript({ id: "recaptcha-api" });
  }, [siteKey, onChange]);
  return null;
};
export default RecaptchaInput;
