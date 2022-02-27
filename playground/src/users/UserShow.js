/* eslint react/jsx-key: off */
import * as React from "react";

import { Show, Tab, TabbedShowLayout, TextField } from "react-admin"; // eslint-disable-line import/no-unresolved

import PropTypes from "prop-types";
import UserTitle from "./UserTitle";

const UserShow = ({ permissions, ...props }) => (
  <Show title={<UserTitle />} {...props}>
    <TabbedShowLayout>
      <Tab label="user.form.summary">
        <TextField source="id" />
        <TextField source="name" />
      </Tab>
      {permissions === "admin" && (
        <Tab label="user.form.security" path="security">
          <TextField source="role" />
        </Tab>
      )}
    </TabbedShowLayout>
  </Show>
);

UserShow.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  permissions: PropTypes.string,
};

export default UserShow;
