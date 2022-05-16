import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useNotify, useRedirect, useTranslate } from "react-admin";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { notifyToken } from "../../../data/authHeaders";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "center",
  },
}));

export const setLoggedIn = ({ data }) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("roles", JSON.stringify(data.roles));
  localStorage.setItem("username", data.username);
  localStorage.setItem("profile", JSON.stringify(data.profile));
};
export const setSignResponse = (r) => localStorage.setItem("r", r);
export const getSignResponse = () => localStorage.getItem("r");
export const clearSignResponse = () => localStorage.removeItem("r");

const doAuthentication = ({ authenticationUrl, search }) =>
  fetch(`${authenticationUrl}${search}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => error);

const SpidLoginForm = ({
  apiUrl,
  location: { search },
  loginUrl,
  authenticationUrl,
  redirectUrl,
  signup,
  action,
}) => {
  const notify = useNotify();
  const classes = useStyles();
  const redirect = useRedirect();
  const translate = useTranslate();
  const { login, authenticate } = useMemo(
    () => ({
      login: loginUrl || `${apiUrl}/spid/auth?b=client`,
      authenticate: authenticationUrl || `${apiUrl}/spid/authenticate`,
    }),
    [apiUrl, loginUrl, authenticationUrl]
  );
  useEffect(() => {
    if (action !== "callback") {
      return;
    }
    const doAuth = async () => {
      const { success, data } = await doAuthentication({
        authenticationUrl: authenticate,
        search,
      });
      if (!success) {
        if (signup !== false) {
          setSignResponse(search);
          document.location = signup;
        } else {
          notify(data?.message || "error.login.failed", "error");
          document.location = "#/login";
        }
      } else {
        clearSignResponse();
        setLoggedIn({ data });
        redirect(
          typeof redirectUrl === "function" ? redirectUrl(data) : redirectUrl
        );
        notifyToken(data.token);
      }
    };
    doAuth();
  }, [action, redirectUrl, search, signup, authenticate, redirect, notify]);

  const stopPropagation = (e) => e.stopPropagation();
  return (
    <div className={classes.root}>
      {action === "callback" ? (
        <CircularProgress />
      ) : (
        <Button
          onClick={stopPropagation}
          component="a"
          color="primary"
          variant="contained"
          href={login}
          fullWidth
        >
          {translate("ra.auth.login.spid")}
        </Button>
      )}
    </div>
  );
};

SpidLoginForm.propTypes = {
  apiUrl: PropTypes.string,
  location: PropTypes.object,
  loginUrl: PropTypes.string,
  authenticationUrl: PropTypes.string,
  redirectUrl: PropTypes.string,
  signup: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  action: PropTypes.string,
};

SpidLoginForm.defaultProps = {
  signup: false,
  redirectUrl: "/",
};

export default SpidLoginForm;
