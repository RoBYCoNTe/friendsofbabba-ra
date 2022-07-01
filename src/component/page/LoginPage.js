import React, { useEffect, useMemo, useRef, useState } from "react";
import { createTheme, makeStyles } from "@material-ui/core/styles";

import { Login } from "react-admin";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    overflow: "hidden",
    minHeight: "98vh",
    backgroundImage: "none",
    backgroundColor: theme.palette.background.default,
    "& [class*=MuiAvatar-root]": {
      display: "none",
      visibility: "hidden",
    },
  },
}));

const LoginPage = ({ logo, children, themeOverride, ...props }) => {
  const themeProp = useRef(themeOverride);
  const [theme, setTheme] = useState(() => createTheme(themeOverride));
  useEffect(() => {
    if (themeProp.current !== themeOverride) {
      themeProp.current = themeOverride;
      setTheme(createTheme(themeOverride));
    }
  }, [themeOverride, themeProp, theme, setTheme]);
  const { location } = props;
  const { search } = location;

  const classes = useStyles();
  const action = useMemo(() => {
    if (search) {
      const params = new URLSearchParams(search);
      return params.get("action");
    }
    return null;
  }, [search]);

  return (
    <ThemeProvider theme={theme}>
      <Login backgroundImage="" theme={theme} classes={classes}>
        {logo}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                action,
                themeOverride: theme,
                ...props,
              })
            : child
        )}
      </Login>
    </ThemeProvider>
  );
};

LoginPage.propTypes = {
  action: PropTypes.string,
  logo: PropTypes.element,
};

export default LoginPage;
