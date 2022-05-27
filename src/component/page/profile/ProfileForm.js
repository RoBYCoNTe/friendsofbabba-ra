import { FormDataConsumer, email, required } from "ra-core";

import BaseProfileForm from "./BaseProfileForm";
import DebouncedTextInput from "../../input/DebouncedTextInput";
import { PasswordInput } from "react-admin";
import React from "react";

const ProfileForm = (props) => (
  <BaseProfileForm {...props}>
    <DebouncedTextInput source="email" validate={[required(), email()]} />
    <DebouncedTextInput
      source="profile.name"
      validate={required()}
      maxLength={50}
    />
    <DebouncedTextInput
      source="profile.surname"
      validate={required()}
      maxLength={50}
    />
    <FormDataConsumer>
      {({ formData, ...props }) =>
        formData.auth === "local" && (
          <DebouncedTextInput {...props} type="password" source="password" />
        )
      }
    </FormDataConsumer>
  </BaseProfileForm>
);
export default ProfileForm;
