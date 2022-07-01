import React, { useEffect, useRef, useState } from "react";

import { Notification } from "ra-ui-materialui";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const SignupPage = ({ staticContext, children, themeOverride, ...props }) => {
  const themeProp = useRef(themeOverride);
  const [theme, setTheme] = useState(() => createTheme(themeOverride));
  useEffect(() => {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  return (
    <ThemeProvider theme={theme}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { theme, ...props })
          : child
      )}
      <Notification />
    </ThemeProvider>
  );
};
export default SignupPage;
