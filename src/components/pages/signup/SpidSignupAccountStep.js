import { DateInput, TextInput } from "ra-ui-materialui";
import React, { Fragment } from "react";
import { email, required } from "ra-core";

import DebouncedTextInput from "../../inputs/DebouncedTextInput";
import { get } from "lodash";

const SpidSignupAccountStep = ({ record, initialValues, ...props }) => (
  <Fragment>
    <TextInput
      {...props}
      source="profile.name"
      validate={required()}
      fullWidth
      maxLength={50}
      disabled={get(initialValues, "profile.name") !== null}
    />
    <TextInput
      {...props}
      source="profile.surname"
      validate={required()}
      fullWidth
      maxLength={50}
      disabled={get(initialValues, "profile.surname") !== null}
    />
    <TextInput
      {...props}
      source="profile.fiscal_code"
      validate={required()}
      fullWidth
      maxLength={16}
      disabled
    />
    <TextInput
      {...props}
      source="email"
      maxLength={255}
      validate={[required(), email()]}
      fullWidth
    />
    <DebouncedTextInput
      {...props}
      source="profile.birth_place"
      validate={required()}
      fullWidth
      maxLength={50}
    />
    <DateInput
      {...props}
      source="profile.birth_date"
      validate={required()}
      disabled
      fullWidth
    />
    <TextInput {...props} source="profile.phone" maxLength={30} />
  </Fragment>
);
export default SpidSignupAccountStep;
