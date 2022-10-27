import { AutocompleteArrayInput, ReferenceArrayInput } from "react-admin";
import { useManyFormatter, useManyParser } from "ra-friendsofbabba";

import React from "react";

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
      <AutocompleteArrayInput optionText="name" />
    </ReferenceArrayInput>
  );
};
export default UsersInput;
