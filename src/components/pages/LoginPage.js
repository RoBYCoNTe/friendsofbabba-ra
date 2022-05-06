import React, { useMemo } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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

const LoginPage = ({ logo, children, ...props }) => {
  const { location } = props;
  const { search } = location;

  const classes = useStyles();
  const theme = useTheme();
  const action = useMemo(() => {
    if (search) {
      const params = new URLSearchParams(search);
      return params.get("action");
    }
    return null;
  }, [search]);

  return (
    <ThemeProvider theme={theme}>
      <Login backgroundImage="" classes={classes}>
        {logo}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { action, ...props })
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
