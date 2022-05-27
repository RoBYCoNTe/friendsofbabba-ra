import * as React from "react";

import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Field, Form } from "react-final-form";
import { useNotify, useRedirect, useSafeSetState, useTranslate } from "ra-core";

import PropTypes from "prop-types";
import RecaptchaInput from "../../input/RecaptchaInput";
import { makeStyles } from "@material-ui/core/styles";
import useResetPassword from "./useResetPassword";

const useStyles = makeStyles(
  (theme) => ({
    form: {
      padding: "0 1em 1em 1em",
    },
    input: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
      width: "100%",
      display: "block",
      clear: "both",
      marginTop: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  }),
  { name: "RaResetPasswordForm" }
);

const Input = ({
  meta: { touched, error }, // eslint-disable-line react/prop-types
  input: inputProps, // eslint-disable-line react/prop-types
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const ResetPasswordForm = ({ recaptchaSiteApiKey, redirectTo = "/login" }) => {
  const [loading, setLoading] = useSafeSetState(false);
  const resetPassword = useResetPassword();
  const translate = useTranslate();
  const redirect = useRedirect();
  const notify = useNotify();
  const classes = useStyles();

  const validate = (values) => {
    const errors = { account: undefined };

    if (!values.account) {
      errors.account = translate("ra.validation.required");
    }
    return errors;
  };
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const submit = (values) => {
    setLoading(true);
    resetPassword(values)
      .then(({ data }) => {
        setLoading(false);
        setTimestamp(Date.now());
        notify(data?.message, { variant: "info" });
        redirect(redirectTo);
      })
      .catch((error) => {
        setLoading(false);
        setTimestamp(Date.now());
        notify(error?.message, { type: "warning" });
      });
  };

  return (
    <Form
      onSubmit={submit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.form}>
            <div className={classes.input}>
              <Field
                autoFocus
                id="account"
                name="account"
                component={Input}
                label={translate("ra.auth.account")}
                disabled={loading}
              />
              <Field
                id="token"
                key={timestamp}
                name="token"
                source="token"
                component={RecaptchaInput}
                siteKey={recaptchaSiteApiKey}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={loading}
              className={classes.button}
            >
              {loading && (
                <CircularProgress
                  className={classes.icon}
                  size={18}
                  thickness={2}
                />
              )}
              {translate("ra.auth.password_reset.button")}
            </Button>
            <Button
              className={classes.button}
              href="/#/login"
              color="primary"
              type="button"
              disabled={loading}
            >
              &larr;
              {translate("ra.auth.back_to_login")}
            </Button>
          </div>
        </form>
      )}
    />
  );
};

ResetPasswordForm.propTypes = {
  redirectTo: PropTypes.string,
};

export default ResetPasswordForm;
