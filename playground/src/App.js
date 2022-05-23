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
} from "friendsofbabba-ra";

import { API_URL } from "./config";
import Layout from "./component/Layout";
import LoginPage from "./component/page/LoginPage";
import React from "react";
import SignupPage from "./component/page/SignupPage";
import humanResource from "./resource/human-resource";
import localPartner from "./resource/local-partner";
import project from "./resource/project";
import publicSpace from "./resource/public-space";
import publicSpacesMedia from "./resource/public-spaces-media";
import theme from "./theme";

const App = () => {
  const apiUrl = API_URL;
  const languages = useI18nLanguages({ apiUrl });

  // Allow i18n to intercept and send unlocalized messages to the server.
  useI18nCatcher({ apiUrl, loading: languages?.loading });

  const dataProvider = useDataProvider({
    apiUrl,
    fileFields: [
      "activity_plan.civil_agreement_media",
      "private_agreement_media",
      "media_collection",
      "media",
      "operational_contact.curriculum_media",
      "public_authority.expression_of_interest_media",
      "support_and_commitments_letter_media",
    ],
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

          <Resource name="projects" {...project} />
          <Resource name="public-spaces" {...publicSpace} />
          <Resource name="public-spaces-media" {...publicSpacesMedia} />
          <Resource name="local-partners" {...localPartner} />
          <Resource name="human-resources" {...humanResource} />

          <Resource name="roles" />
          <Resource name="languages" />
          <Resource name="municipalities/provinces" />
          <Resource name="public-space-types" />
          <Resource name="public-space-media-types" />
          <Resource name="workflow/transactions/projects" />
          <Resource name="municipalities" group="admin" />

          <CrudResource name="users" group="admin" />
          <CrudResource
            name="language-messages"
            group="admin"
            icon={Icons.FlagOutlined}
          />
        </Admin>
      </CrudProvider>
    </WorkflowProvider>
  );
};
export default App;
