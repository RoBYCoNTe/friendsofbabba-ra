/* eslint react/jsx-key: off */
import * as React from "react";

import {
  AutocompleteInput,
  Create,
  FormTab,
  TabbedForm,
  TextInput,
} from "react-admin";

const UserCreate = ({ permissions, ...props }) => (
  <Create {...props}>
    <TabbedForm>
      <FormTab label="user.form.summary" path="">
        <TextInput source="name" defaultValue="Slim Shady" autoFocus />
      </FormTab>
      {permissions === "admin" && (
        <FormTab label="user.form.security" path="security">
          <AutocompleteInput
            source="role"
            choices={[
              { id: "", name: "None" },
              { id: "admin", name: "Admin" },
              { id: "user", name: "User" },
              { id: "user_simple", name: "UserSimple" },
            ]}
          />
        </FormTab>
      )}
    </TabbedForm>
  </Create>
);

export default UserCreate;
