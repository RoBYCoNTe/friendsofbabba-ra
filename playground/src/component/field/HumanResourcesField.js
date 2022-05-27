import {
  Group,
  GroupItem,
  GroupTitle,
  LongTextField,
  ReferenceListField,
  useFieldLabel,
  useWorkflowInput,
} from "friendsofbabba-ra";
import React, { Fragment } from "react";

const HumanResourcesField = ({ ...props }) => {
  const fieldLabel = useFieldLabel({ resource: "human-resources" });
  const { disabled } = useWorkflowInput({
    ...props,
  });
  return (
    <Fragment>
      <GroupTitle
        title={fieldLabel("human_resources")}
        subTitle={fieldLabel("human_resources.help")}
      />
      <Group {...props}>
        <GroupItem lg={12} md={12} sm={12} xs={12}>
          <ReferenceListField
            createLabel="ra.action.add"
            reference="human-resources"
            target="project_id"
            tab={2}
            mobileBreakpoint="sm"
            mobilePrimaryText={(record) => record?.description}
            create={!disabled}
            modify={!disabled}
            remove={!disabled}
          >
            <LongTextField source="description" />
            <LongTextField source="role" />
          </ReferenceListField>
        </GroupItem>
      </Group>
    </Fragment>
  );
};

export default HumanResourcesField;
