import {
  DebouncedTextInput,
  Group,
  GroupItem,
  ReferenceToolbar,
  useFieldLabel,
  useSaveMutation,
} from "ra-friendsofbabba";

import { MembershipTypeInput } from "../input";
import React from "react";
import { SimpleForm } from "react-admin";

const HumanResourceForm = (props) => {
  const save = useSaveMutation({ ...props });
  const fieldLabel = useFieldLabel({ ...props });
  return (
    <SimpleForm
      {...props}
      save={save}
      toolbar={
        <ReferenceToolbar
          backTab={2}
          backReferenceTarget="project_id"
          backReference="projects"
        />
      }
    >
      <Group fullWidth>
        <GroupItem lg={8} md={10} sm={12}>
          <DebouncedTextInput
            source="description"
            helperText={fieldLabel("description.help")}
            maxLength={200}
            multiline
          />
        </GroupItem>
        <GroupItem lg={8} md={10} sm={12}>
          <MembershipTypeInput source="membership" />
        </GroupItem>
        <GroupItem lg={8} md={10} sm={12}>
          <DebouncedTextInput
            source="role"
            helperText={fieldLabel("role.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
      </Group>
    </SimpleForm>
  );
};
export default HumanResourceForm;
