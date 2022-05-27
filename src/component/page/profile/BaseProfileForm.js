import {
  Toolbar as RaToolbar,
  SaveButton,
  SimpleForm,
  useNotify,
} from "react-admin";

import React from "react";
import useSaveMutation from "../../../data/useSaveMutation";

const BaseProfileForm = ({ children, ...props }) => {
  const notify = useNotify();
  const save = useSaveMutation({
    ...props,
    resource: "users/profile",
    redirect: "/",
    onSuccess: ({ data: { email, profile } }) => {
      localStorage.setItem("profile", JSON.stringify({ email, ...profile }));
      notify("ra.message.profile_updated");
    },
  });
  return (
    <SimpleForm
      {...props}
      toolbar={
        <RaToolbar>
          <SaveButton />
        </RaToolbar>
      }
      save={save}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...props })
          : child
      )}
    </SimpleForm>
  );
};

export default BaseProfileForm;
