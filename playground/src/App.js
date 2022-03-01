import * as Icons from "@material-ui/icons";

import { Admin, Resource } from "react-admin";
import { Layout, Menu, MenuGroup, MenuItem } from "ra-ui-materialui-layout";

import React from "react";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import users from "./users";

const MyMenu = (props) => (
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
        localize: false,
        to: "/posts",
      },
    ]}
    badges={"getBadges"}
  >
    <MenuGroup label="Useful Links">
      <MenuItem
        label="Doctor strange"
        sub="Doctor strange website"
        icon={Icons.AccessAlarm}
        href="https://doctorstrange.com"
        target="_blank"
      />
    </MenuGroup>
  </Menu>
);
const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;
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
