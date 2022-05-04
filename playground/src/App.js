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
  createI18nProvider,
  createCrud,
  CrudProvider,
  WorkflowProvider,
  CrudContext,
} from "friendsofbabba-ra";

import React, { useContext, useMemo } from "react";

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
  const { data } = useContext(CrudContext);
  const badges = useMemo(
    () =>
      data
        ? Object.keys(data).reduce(
            (badges, k) =>
              data[k].badge != null
                ? { ...badges, [k]: data[k].badge }
                : badges,
            {}
          )
        : {},
    [data]
  );
  return (
    <Menu
      {...props}
      mode="build"
      order={{
        dashboard: 0,
        admin: 1,
      }}
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
const components = {
  fields: {},
  inputs: {},
  forms: {},
  grids: {},
};
const App = () => {
  const apiUrl = "http://babba.local/api";
  const languages = useI18nLanguages({ apiUrl });

  // Allow i18n to intercept and send unlocalized messages to the server.
  useI18nCatcher({ apiUrl, loading: languages?.loading });

  const dataProvider = useDataProvider({
    apiUrl,
    fileFields: ["media", "media_collection"],
  });
  const authProvider = useAuthProvider({ apiUrl });
  if (languages?.loading) {
    return (
      <Loading loadingPrimary="Loading" loadingSecondary="Please wait..." />
    );
  }

  return (
    <WorkflowProvider apiUrl={apiUrl}>
      <CrudProvider apiUrl={apiUrl}>
        <Admin
          layout={MyLayout}
          dataProvider={dataProvider}
          authProvider={authProvider}
          i18nProvider={createI18nProvider({
            languages: languages.data,
            locale: "it",
          })}
        >
          <Resource
            name="posts"
            {...createCrud({
              icon: Icons.AcUnit,
              options: { group: "dashboard" },
            })}
          />
          <Resource
            name="tickets"
            {...createCrud({
              icon: Icons.List,
              components,
            })}
          />
          <Resource name="todos" {...createCrud({ icon: Icons.List })} />
          <Resource
            name="d-tests"
            {...createCrud({ icon: Icons.TextureSharp })}
          />
          <Resource name="workflow/transactions/tickets" />
          <Resource name="workflow/transactions/posts" />
          <Resource name="workflow/transactions/todos" />
          <Resource name="workflow/transactions/d-tests" />
          <Resource
            name="users"
            {...createCrud({
              icon: Icons.SupervisedUserCircle,
            })}
          />
          <Resource name="roles" />
        </Admin>
      </CrudProvider>
    </WorkflowProvider>
  );
};
export default App;
