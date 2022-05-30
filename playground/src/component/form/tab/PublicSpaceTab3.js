import { FormTab, ValidationSummary } from "ra-friendsofbabba";

import PublicSpacesMediaField from "../../field/PublicSpacesMediaField";
import React from "react";

const PublicSpaceTab3 = ({ create, ...props }) => (
  <FormTab {...props}>
    <ValidationSummary />
    <PublicSpacesMediaField source="media" fullWidth />
  </FormTab>
);
export default PublicSpaceTab3;
