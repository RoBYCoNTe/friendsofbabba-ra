import * as Icons from "@material-ui/icons";

import { Admin, Resource } from "react-admin";
import {
  AppBar,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  UserMenu,
  UserMenuItem,
} from "ra-ui-materialui-layout";

import React from "react";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import { useQueryWithStore } from "ra-core";
import users from "./users";

const MyUserMenu = (props) => {
  const { logout } = props;
  return (
    <>
      <UserMenu {...props}>
        <UserMenuItem
          label="Profile"
          icon={<Icons.AccountCircle />}
          to="/profile"
        />
        <UserMenuItem label="Tickets" icon={<Icons.List />} to="/tickets" />
        {logout}
      </UserMenu>
    </>
  );
};
const MyAppBar = (props) => <AppBar {...props} userMenu={MyUserMenu} />;

const MyMenu = (props) => {
  const { data: badges } = useQueryWithStore({
    type: "getBadges",
  });
  return (
    <Menu
      {...props}
      mode="build"
      order={{
        dashboard: 0,
        admin: 1,
      }}
      items={[
        {
          icon: Icons.AcUnit,
          name: "posts",
          group: "dashboard",
          to: "/posts",
        },
      ]}
      badges={badges}
    >
      <MenuGroup label="Useful Links">
        <MenuItem
          label="Doctor strange"
          sub="Doctor strange website"
          icon={Icons.AccessAlarm}
          href="https://doctorstrange.com"
          target="_blank"
        />
        <MenuItem
          label="My very long text label should be placed in two lines"
          sub="My very long text sub label should be placed in two lines"
          icon={Icons.AddToPhotos}
          to="/posts/create"
        />
      </MenuGroup>
    </Menu>
  );
};
const MyLayout = (props) => (
  <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
);
const App = () => (
  <Admin
    layout={MyLayout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource name="users" {...users} />
  </Admin>
);

export default App;
