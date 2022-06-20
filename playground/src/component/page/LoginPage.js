import {
  LoginPage as FobLoginPage,
  LocalLoginForm,
  ResetPasswordLinkButton,
  SpidLoginForm,
} from "ra-friendsofbabba";

import { API_URL } from "../../config";
import React from "react";

const LoginPage = (props) => (
  <FobLoginPage {...props}>
    <LocalLoginForm />
    <SpidLoginForm apiUrl={API_URL} signup="#/signup" />
    <ResetPasswordLinkButton />
  </FobLoginPage>
);
export default LoginPage;
