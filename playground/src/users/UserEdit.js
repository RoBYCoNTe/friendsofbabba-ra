import * as React from "react";

import {
  Edit,
  FormTab,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";

import PropTypes from "prop-types";
import UserTitle from "./UserTitle";

const UserEditForm = ({ permissions, save, ...props }) => {
  const newSave = (values) =>
    new Promise((resolve, reject) => {
      if (values.name === "test") {
        return resolve({
          name: {
            message: "ra.validation.minLength",
            args: { min: 10 },
          },
        });
      }
      return save(values);
    });

  return (
    <TabbedForm {...props} save={newSave}>
      <FormTab label="user.form.summary" path="">
        {permissions === "admin" && <TextInput disabled source="id" />}
        <TextInput
          source="name"
          defaultValue="slim shady"
          validate={required()}
        />
      </FormTab>
      {permissions === "admin" && (
        <FormTab label="user.form.security" path="security">
          <SelectInput
            source="role"
            validate={required()}
            choices={[
              { id: "", name: "None" },
              { id: "admin", name: "Admin" },
              { id: "user", name: "User" },
            ]}
            defaultValue={"user"}
          />
        </FormTab>
      )}
    </TabbedForm>
  );
};
const UserEdit = ({ permissions, ...props }) => {
  return (
    <Edit title={<UserTitle />} {...props}>
      <UserEditForm permissions={permissions} />
    </Edit>
  );
};

UserEdit.propTypes = {
  id: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  permissions: PropTypes.string,
};

export default UserEdit;
