import React from "react";
import { ReferenceInput, AutocompleteInput } from "react-admin";
const ReferenceAutocompleteInput = ({ optionText, ...props }) => (
  <ReferenceInput {...props}>
    <AutocompleteInput optionText={optionText} />
  </ReferenceInput>
);
export default ReferenceAutocompleteInput;
