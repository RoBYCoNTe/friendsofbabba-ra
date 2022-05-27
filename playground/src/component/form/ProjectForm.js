import {
  ActivityPlanInput,
  OperationalContactInput,
  PublicAuthorityInput,
} from "../input";
import {
  FormTab,
  Toolbar,
  TransactionLogsField,
  TransactionNotesInput,
  TransactionNotesIsPrivateInput,
  ValidationSummary,
  useFieldLabel,
  useSaveMutation,
} from "friendsofbabba-ra";
import { LocalPartnersField, PublicSpacesField } from "../field";
import React, { useEffect, useState } from "react";
import { TabbedForm, useGetIdentity } from "react-admin";

import HumanResourcesField from "../field/HumanResourcesField";

const defaultInitialValues = {
  activity_plan: {
    id: null,
  },
  operational_contact: {
    id: null,
  },
};

const ProjectForm = ({ create = false, ...props }) => {
  const save = useSaveMutation({ ...props });
  const fieldLabel = useFieldLabel({ ...props });
  const [initialValues, setInitialValues] = useState(defaultInitialValues);
  const { identity, loading } = useGetIdentity();
  useEffect(() => {
    if (!loading && identity != null) {
      setInitialValues((prevState) => ({
        ...prevState,
        public_authority: {
          ...prevState?.public_authority,
          accountable_name: identity.name,
          accountable_surname: identity.surname,
          accountable_fiscal_code: identity.fiscal_code,
          accountable_email: identity.email,
        },
        activity_plan: {
          ...prevState?.activity_plan,
          civil_referent: `${identity.name} ${identity.surname}`,
          civil_operator: `${identity.name} ${identity.surname}`,
        },
      }));
    }
  }, [identity, loading]);
  return (
    <TabbedForm
      {...props}
      toolbar={<Toolbar />}
      initialValues={initialValues}
      save={save}
    >
      <FormTab label={fieldLabel("tabs.general")}>
        <ValidationSummary />
        <PublicAuthorityInput source="public_authority" fullWidth />
        <TransactionNotesInput source="notes" fullWidth />
        <TransactionNotesIsPrivateInput source="is_private" />
        <TransactionLogsField source="logs" fullWidth />
      </FormTab>
      <FormTab label={fieldLabel("tabs.section_2")}>
        <ValidationSummary />
        <PublicSpacesField source="public_spaces" fullWidth />
      </FormTab>
      <FormTab label={fieldLabel("tabs.section_3")}>
        <ValidationSummary />
        <LocalPartnersField source="local_partners" fullWidth />
        <OperationalContactInput source="operational_contact" fullWidth />
        <HumanResourcesField source="human_resources" fullWidth />
      </FormTab>
      <FormTab label={fieldLabel("tabs.section_4")}>
        <ValidationSummary />
        <ActivityPlanInput source="activity_plan" fullWidth />
      </FormTab>
    </TabbedForm>
  );
};

export default ProjectForm;
