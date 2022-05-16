import React from "react";
import { ReferenceInput, SelectInput } from "react-admin";
const ReferenceAutocompleteInput = ({ optionText, ...props }) => (
  <ReferenceInput {...props}>
    <SelectInput optionText={optionText} />
  </ReferenceInput>
);
export default ReferenceAutocompleteInput;
