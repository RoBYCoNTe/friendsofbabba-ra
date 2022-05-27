import { ReferenceInput, SelectInput } from "react-admin";

import React from "react";

const PublicSpaceMediaTypeInput = ({ ...props }) => (
  <ReferenceInput
    {...props}
    reference="public-space-media-types"
    sort={{ field: "id", order: "ASC" }}
  >
    <SelectInput optionText="name" optionValue="id" />
  </ReferenceInput>
);
export default PublicSpaceMediaTypeInput;
