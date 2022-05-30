import { ResetPasswordPage as FobResetPasswordPage } from "ra-friendsofbabba";
import { RECAPTCHA_SITE_KEY } from "../../config";
import React from "react";

const ResetPasswordPage = (props) => (
  <FobResetPasswordPage {...props} recaptchaSiteApiKey={RECAPTCHA_SITE_KEY} />
);

export default ResetPasswordPage;
