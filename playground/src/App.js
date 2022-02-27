import { Admin, Resource } from "react-admin";

import { Layout } from "ra-ui-materialui-layout";
import React from "react";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import i18nProvider from "./i18nProvider";
import users from "./users";

const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource name="users" {...users} />
  </Admin>
);

export default App;
