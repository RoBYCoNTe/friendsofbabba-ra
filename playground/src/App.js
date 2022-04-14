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
  useCrud,
  createI18nProvider,
  workflowReducer,
  createCrud,
  crudReducer,
} from "friendsofbabba-ra";

import React from "react";
import PeopleIcon from "@material-ui/icons/People";
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
  const languages = useI18nLanguages({ apiUrl });
  const workflows = useWorkflows({ apiUrl });
  const crud = useCrud({ apiUrl });

  // Allow i18n to intercept and send unlocalized messages to the server.
  useI18nCatcher({ apiUrl, loading: languages?.loading });

  const dataProvider = useDataProvider({ apiUrl });
  const authProvider = useAuthProvider({ apiUrl });
  if (languages?.loading || workflows?.loading || crud?.loading) {
    return (
      <Loading loadingPrimary="Loading" loadingSecondary="Please wait..." />
    );
  }

  return (
    <Admin
      layout={MyLayout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={createI18nProvider({
        languages: languages.data,
        locale: "it",
      })}
      customReducers={{
        workflow: workflowReducer,
        crud: crudReducer(crud.data),
      }}
    >
      <Resource name="tickets" {...tickets} />
      <Resource name="posts" {...tickets} />
      <Resource name="users" {...createCrud({ icon: PeopleIcon })} />
      <Resource name="roles" />
    </Admin>
  );
};
export default App;
