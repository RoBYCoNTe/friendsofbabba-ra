import * as Icons from "@material-ui/icons";

import { Admin, Loading, Resource } from "react-admin";
import {
  AppBar,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  UserMenu,
  UserMenuItem,
  useDataProvider,
  useAuthProvider,
  useI18nLanguages,
  useI18nCatcher,
  useWorkflows,
  createI18nProvider,
  workflowReducer,
} from "friendsofbabba-ra";

import React from "react";

import users from "./users";
import tickets from "./tickets";

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
  // import { useQueryWithStore } from "ra-core";
  // const { data: badges } = useQueryWithStore({
  //   type: "getBadges",
  // });
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
      // badges={badges}
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
const App = () => {
  const apiUrl = "http://babba.local/api";
  const { languages, loading } = useI18nLanguages({ apiUrl });
  const { loaded } = useWorkflows({ apiUrl });

  // Allow i18n to intercept and send unlocalized messages to the server.
  useI18nCatcher({ apiUrl, loading });

  const dataProvider = useDataProvider({ apiUrl });
  const authProvider = useAuthProvider({ apiUrl });
  if (loading || !loaded) {
    return (
      <Loading loadingPrimary="Loading" loadingSecondary="Please wait..." />
    );
  }

  return (
    <Admin
      layout={MyLayout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={createI18nProvider({ languages, locale: "it" })}
      customReducers={{
        workflow: workflowReducer,
      }}
    >
      <Resource name="tickets" {...tickets} />
      <Resource name="users" {...users} />
      <Resource name="roles" />
    </Admin>
  );
};
export default App;
