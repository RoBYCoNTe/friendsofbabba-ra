import * as Icons from "@material-ui/icons";

import { UserMenu as FobUserMenu, UserMenuItem } from "ra-friendsofbabba";

import React from "react";

const UserMenu = ({ ...props }) => (
  <FobUserMenu {...props}>
    <UserMenuItem
      label="Profilo"
      to="/profile"
      icon={<Icons.SupervisorAccount />}
    />
    {props.logout}
  </FobUserMenu>
);

export default UserMenu;
