import { ReferenceInput, SelectInput } from "react-admin";

import React from "react";

const PublicSpaceTypeInput = ({ ...props }) => (
  <ReferenceInput
    {...props}
    reference="public-space-types"
    sort={{ field: "id", order: "ASC" }}
  >
    <SelectInput optionText="name" optionValue="id" />
  </ReferenceInput>
);
export default PublicSpaceTypeInput;
