import {
  AutocompleteArrayInput,
  useManyFormatter,
  useManyParser,
} from "ra-friendsofbabba";

import React from "react";
import { ReferenceArrayInput } from "react-admin";

const UsersInput = (props) => {
  const manyFormatter = useManyFormatter();
  const manyParser = useManyParser();
  return (
    <ReferenceArrayInput
      {...props}
      reference="users"
      format={manyFormatter}
      parse={manyParser}
      fullWidth
    >
      <AutocompleteArrayInput optionText="name" helperText="Hello, World!" />
    </ReferenceArrayInput>
  );
};
export default UsersInput;
