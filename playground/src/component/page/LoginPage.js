import {
  LoginPage as FobLoginPage,
  LocalLoginForm,
  ResetPasswordButton,
  SpidLoginForm,
} from "friendsofbabba-ra";

import { API_URL } from "../../config";
import React from "react";

const LoginPage = (props) => (
  <FobLoginPage {...props}>
    <LocalLoginForm />
    <SpidLoginForm apiUrl={API_URL} signup="#/signup" />
    <ResetPasswordButton />
  </FobLoginPage>
);
export default LoginPage;
