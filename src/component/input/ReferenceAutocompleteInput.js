import { AutocompleteInput, ReferenceInput } from "react-admin";

import React from "react";

const ReferenceAutocompleteInput = ({ optionText, helperText, ...props }) => (
  <ReferenceInput {...props}>
    <AutocompleteInput optionText={optionText} helperText={helperText} />
  </ReferenceInput>
);
export default ReferenceAutocompleteInput;
