import { ReferenceInput, SelectInput } from "react-admin";

import React from "react";

const ReferenceAutocompleteInput = ({ optionText, helperText, ...props }) => (
  <ReferenceInput {...props}>
    <SelectInput optionText={optionText} helperText={helperText} />
  </ReferenceInput>
);
export default ReferenceAutocompleteInput;
