import {
  Group,
  GroupItem,
  GroupTitle,
  ProgressField,
  ReferenceListField,
  TextField,
  useFieldLabel,
  useWorkflowInput,
} from "ra-friendsofbabba";
import React, { Fragment } from "react";

const PublicSpacesField = ({ ...props }) => {
  const fieldLabel = useFieldLabel({ ...props });
  const { disabled } = useWorkflowInput({
    ...props,
  });

  return (
    <Fragment>
      <GroupTitle
        title={fieldLabel("public_spaces")}
        subTitle={fieldLabel("public_spaces.help")}
      />
      <Group {...props}>
        <GroupItem lg={12} md={12} sm={12}>
          <ReferenceListField
            tab={1}
            createLabel="ra.action.add"
            reference="public-spaces"
            target="project_id"
            mobileBreakpoint="sm"
            mobilePrimaryText={(record) => record?.name}
            create={!disabled}
            modify={!disabled}
            remove={!disabled}
          >
            <TextField source="name" sortBy="PublicSpaces.name" />
            <TextField
              source="public_space_type.name"
              sortBy="PublicSpaceTypes.name"
            />
            <ProgressField source="completion" sortable={false} />
          </ReferenceListField>
        </GroupItem>
      </Group>
    </Fragment>
  );
};

export default PublicSpacesField;
