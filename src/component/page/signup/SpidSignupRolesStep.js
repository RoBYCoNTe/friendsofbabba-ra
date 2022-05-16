import React, { Fragment } from "react";

import ReferenceCheckboxGroupInput from "../../input/ReferenceCheckboxGroupInput";
import { required } from "ra-core";

const SpidSignupRolesStep = ({ ...props }) => (
  <Fragment>
    <ReferenceCheckboxGroupInput
      {...props}
      source="roles"
      reference="roles"
      optionText="name"
      validate={required()}
    />
  </Fragment>
);
export default SpidSignupRolesStep;
