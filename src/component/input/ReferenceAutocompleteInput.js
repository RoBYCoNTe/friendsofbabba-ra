import AutocompleteInput from "component/input/AutocompleteInput";
import React from "react";
import { ReferenceInput } from "react-admin";

const ReferenceAutocompleteInput = ({ optionText, helperText, ...props }) => (
  <ReferenceInput {...props}>
    <AutocompleteInput optionText={optionText} helperText={helperText} />
  </ReferenceInput>
);
export default ReferenceAutocompleteInput;
