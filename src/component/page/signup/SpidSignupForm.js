import { CircularProgress, Grid, Typography } from "@material-ui/core";
import {
  Create,
  SaveButton,
  SimpleForm,
  Toolbar,
  useRedirect,
} from "react-admin";
import React, { useContext, useEffect, useMemo, useState } from "react";
import SignupStepper, {
  SignupStepperContext,
  SignupStepperProvider,
} from "./SignupStepper";
import { clearSignResponse, getSignResponse } from "../login/SpidLoginForm";

import PropTypes from "prop-types";
import RecaptchaInput from "../../input/RecaptchaInput";
import SpidSignupAccountStep from "./SpidSignupAccountStep";
import SpidSignupRolesStep from "./SpidSignupRolesStep";
import { makeStyles } from "@material-ui/core/styles";
import useSaveMutation from "../../../data/useSaveMutation";

const getProfile = ({ loadUrl, search }) =>
  fetch(`${loadUrl}${search}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => error);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "98vh",
  },
}));

const SignupToolbar = ({ basePath, ...props }) => {
  const { isLastStep } = useContext(SignupStepperContext);
  return (
    <Toolbar {...props}>
      <SaveButton label="ra.auth.signup" disabled={!isLastStep} />
    </Toolbar>
  );
};

const SpidSignupForm = ({
  apiUrl,
  loadUrl,
  staticContext,
  children,
  logo,
  title,
  subTitle,
  resource,
  recaptchaSiteApiKey,
  ...props
}) => {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState(null);
  const redirect = useRedirect();
  const search = getSignResponse();
  const save = useSaveMutation({
    resource,
    onSuccess: () => {
      setTimeout(() => {
        document.location.href = `#/login${search}`;
        document.location.reload();
      }, 100);
    },
  });
  const { load } = useMemo(
    () => ({
      load: loadUrl || `${apiUrl}/spid/load`,
    }),
    [apiUrl, loadUrl]
  );

  useEffect(() => {
    const doLoad = async () => {
      if (!search) {
        redirect("/login");
      }
      const { success, data } = await getProfile({ loadUrl: load, search });
      if (success) {
        setInitialValues(data);
      } else {
        redirect("/login");
        clearSignResponse();
      }
    };
    doLoad();
  }, [search, load, redirect]);

  return (
    <SignupStepperProvider>
      <Grid container justifyContent="center" className={classes.root}>
        <Grid item lg={5} md={8} sm={10} xs={12}>
          {logo}
          {React.isValidElement(title) ? (
            title
          ) : (
            <Typography
              variant="h3"
              gutterBottom
              display="block"
              color="textPrimary"
            >
              {title}
            </Typography>
          )}
          {subTitle}
          {initialValues == null && <CircularProgress />}
          {initialValues != null && (
            <Create basePath={resource} resource={resource} {...props}>
              <SimpleForm
                save={save}
                initialValues={initialValues}
                toolbar={<SignupToolbar />}
              >
                <SignupStepper fullWidth>
                  <SpidSignupAccountStep title="General Infoes" fullWidth />
                  <SpidSignupRolesStep title="Roles" fullWidth />
                </SignupStepper>
                <RecaptchaInput source="token" siteKey={recaptchaSiteApiKey} />
              </SimpleForm>
            </Create>
          )}
        </Grid>
      </Grid>
    </SignupStepperProvider>
  );
};
SpidSignupForm.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  subTitle: PropTypes.element,
  logo: PropTypes.element,
  apiUrl: PropTypes.string,
  loadUrl: PropTypes.string,
  recaptchaSiteApiKey: PropTypes.string.isRequired,
  staticContext: PropTypes.object,
};
SpidSignupForm.defaultProps = {
  resource: "spid",
};

export default SpidSignupForm;
