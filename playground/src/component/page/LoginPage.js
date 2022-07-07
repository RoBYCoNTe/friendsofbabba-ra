import {
  LoginPage as FobLoginPage,
  LocalLoginForm,
  ResetPasswordLinkButton,
  SpidLoginForm,
} from "ra-friendsofbabba";

import { API_URL } from "../../config";
import React from "react";
import theme from "../../theme";

const LoginPage = (props) => (
  <FobLoginPage {...props} themeOverride={theme}>
    <LocalLoginForm />
    <SpidLoginForm apiUrl={API_URL} signup="#/signup" />
    <ResetPasswordLinkButton />
  </FobLoginPage>
);
export default LoginPage;
