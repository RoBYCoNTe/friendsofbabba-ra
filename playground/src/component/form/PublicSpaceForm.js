import {
  ReferenceToolbar,
  useFieldLabel,
  useSaveMutation,
} from "ra-friendsofbabba";

import PublicSpaceTab1 from "./tab/PublicSpaceTab1";
import PublicSpaceTab2 from "./tab/PublicSpaceTab2";
import PublicSpaceTab3 from "./tab/PublicSpaceTab3";
import React from "react";
import { TabbedForm } from "react-admin";

const PublicSpaceForm = ({ create = false, ...props }) => {
  const save = useSaveMutation({ ...props });
  const fieldLabel = useFieldLabel({ ...props });
  return (
    <TabbedForm
      {...props}
      save={save}
      initialValues={{
        ...props?.record,
        handler: "public",
      }}
      toolbar={
        <ReferenceToolbar
          backTab={1}
          backReferenceTarget="project_id"
          backReference="projects"
        />
      }
    >
      <PublicSpaceTab1 label={fieldLabel("tabs.general")} create={create} />
      <PublicSpaceTab2 label={fieldLabel("tabs.description")} create={create} />
      <PublicSpaceTab3 label={fieldLabel("tabs.media")} create={create} />
    </TabbedForm>
  );
};
export default PublicSpaceForm;
