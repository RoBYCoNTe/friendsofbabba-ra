import React from "react";
import {
  useSaveMutation,
  useManyFormatter,
  useManyParser,
} from "friendsofbabba-ra";
import {
  CheckboxGroupInput,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
const Form = ({ refresh, ...props }) => {
  const save = useSaveMutation({ ...props, refresh });
  const parse = useManyParser();
  const format = useManyFormatter();

  return (
    <SimpleForm {...props} save={save}>
      <TextInput source="username" autoFocus autoComplete="off" />
      <TextInput source="password" autoComplete="off" type="password" />
      <TextInput source="email" type="email" autoComplete="off" />
      <TextInput source="profile.name" />
      <TextInput source="profile.surname" />
      <ReferenceArrayInput
        source="roles"
        reference="roles"
        parse={parse}
        format={format}
      >
        <CheckboxGroupInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  );
};

export default Form;
