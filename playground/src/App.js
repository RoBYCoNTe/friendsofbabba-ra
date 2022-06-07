import * as Components from "./component";
import * as Icons from "@material-ui/icons";

import { Admin, Loading, Resource, RouteWithoutLayout } from "react-admin";
import {
  CrudProvider,
  CrudResource,
  WorkflowProvider,
  createI18nProvider,
  useAuthProvider,
  useDataProvider,
  useI18nCatcher,
  useI18nLanguages,
} from "ra-friendsofbabba";

import { API_URL } from "./config";
import Layout from "./component/Layout";
import LoginPage from "./component/page/LoginPage";
import ProfilePage from "./component/page/ProfilePage";
import React from "react";
import ResetPasswordPage from "./component/page/ResetPasswordPage";
import { Route } from "react-router-dom";
import SignupPage from "./component/page/SignupPage";
import theme from "./theme";

const App = () => {
  const apiUrl = API_URL;
  const languages = useI18nLanguages({ apiUrl });

  // Allow i18n to intercept and send unlocalized messages to the server.
  useI18nCatcher({ apiUrl, loading: languages?.loading });

  const dataProvider = useDataProvider({
    apiUrl,
    fileFields: ["media_collection", "media"],
  });
  const authProvider = useAuthProvider({ apiUrl });
  if (languages?.loading) {
    return (
      <Loading loadingPrimary="Loading" loadingSecondary="Please wait..." />
    );
  }

  return (
    <WorkflowProvider apiUrl={apiUrl}>
      <CrudProvider apiUrl={apiUrl} components={Components}>
        <Admin
          theme={theme}
          layout={Layout}
          loginPage={LoginPage}
          customRoutes={[
            <RouteWithoutLayout
              key="signup"
              path="/signup"
              component={SignupPage}
            />,
            <RouteWithoutLayout
              key="reset-password"
              path="/reset-password"
              component={ResetPasswordPage}
            />,
            <Route key="profile" path="/profile" component={ProfilePage} />,
          ]}
          dataProvider={dataProvider}
          authProvider={authProvider}
          i18nProvider={createI18nProvider({
            languages: languages.data,
            locale: "it",
          })}
        >
          <CrudResource
            name="notifications"
            group="dashboard"
            icon={Icons.NotificationImportant}
          />
          <CrudResource
            name="blog-posts"
            group="blog"
            icon={Icons.DockOutlined}
          />
          <Resource name="workflow/transactions/blog-posts" />
          <CrudResource
            name="blog-categories"
            group="blog"
            icon={Icons.CategoryOutlined}
          />

          <Resource name="roles" />
          <Resource name="languages" />
          <CrudResource name="users" group="admin" roles={["admin"]} />
          <CrudResource
            name="language-messages"
            group="admin"
            roles={["admin"]}
            icon={Icons.FlagOutlined}
          />
        </Admin>
      </CrudProvider>
    </WorkflowProvider>
  );
};
export default App;
