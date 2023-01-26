import {
  AutocompleteArrayInput,
  useManyFormatter,
  useManyParser,
} from "ra-friendsofbabba";

import React from "react";
import { ReferenceArrayInput } from "react-admin";

const ReferenceAutocompleteArrayInput = ({
  optionText,
  helperText,
  ...props
}) => {
  const manyFormatter = useManyFormatter();
  const manyParser = useManyParser();
  return (
    <ReferenceArrayInput
      {...props}
      format={manyFormatter}
      parse={manyParser}
      fullWidth
    >
      <AutocompleteArrayInput
        optionText={optionText}
        helperText={helperText}
        resource={props.resource}
      />
    </ReferenceArrayInput>
  );
};
export default ReferenceAutocompleteArrayInput;
