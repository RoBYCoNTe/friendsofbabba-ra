import { API_URL, APP_TITLE, RECAPTCHA_SITE_KEY } from "../../config";
import {
  DebouncedTextInput,
  SignupPage as FobSignupPage,
  SpidSignupForm,
} from "ra-friendsofbabba";

import { Fragment } from "react";

const AdditionalStep = (props) => (
  <Fragment>
    <DebouncedTextInput {...props} fullWidth source="profile.birth_province" />
  </Fragment>
);
const SignupPage = (props) => (
  <FobSignupPage {...props} title={APP_TITLE}>
    <SpidSignupForm apiUrl={API_URL} recaptchaSiteApiKey={RECAPTCHA_SITE_KEY}>
      <AdditionalStep title="Province" />
    </SpidSignupForm>
  </FobSignupPage>
);

export default SignupPage;
