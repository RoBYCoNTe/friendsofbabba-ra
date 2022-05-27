import { Edit } from "react-admin";
import ProfileForm from "./profile/ProfileForm";
import PropTypes from "prop-types";
import React from "react";

const ProfilePage = ({
  children = <ProfileForm />,
  staticContext,
  title = "ra.page.profile.title",
  ...props
}) => {
  return (
    <Edit
      {...props}
      id="profile"
      title={title}
      resource="users"
      basePath="users"
    >
      {React.isValidElement(children)
        ? React.cloneElement(children, { ...props })
        : children}
    </Edit>
  );
};

ProfilePage.propTypes = {
  children: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ProfilePage;
