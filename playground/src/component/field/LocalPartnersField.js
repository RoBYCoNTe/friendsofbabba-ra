import {
  Group,
  GroupItem,
  GroupTitle,
  LongTextField,
  ReferenceListField,
  TextField,
  useFieldLabel,
  useWorkflowInput,
} from "friendsofbabba-ra";

import { Fragment } from "react";

const LocalPartnersField = (props) => {
  const fieldLabel = useFieldLabel({ ...props });
  const { disabled } = useWorkflowInput({
    ...props,
    source: "local_partners",
  });
  return (
    <Fragment>
      <GroupTitle
        title={fieldLabel("local_partners")}
        subTitle={fieldLabel("local_partners.help")}
      />
      <Group {...props}>
        <GroupItem lg={12} md={12} sm={12}>
          <ReferenceListField
            tab={2}
            createLabel="ra.action.add"
            reference="local-partners"
            target="project_id"
            mobileBreakpoint="sm"
            mobilePrimaryText={(record) => record?.name}
            create={!disabled}
            modify={!disabled}
            remove={!disabled}
          >
            <TextField source="name" />
            <LongTextField source="headquarters" />
            <LongTextField source="roles" />
          </ReferenceListField>
        </GroupItem>
      </Group>
    </Fragment>
  );
};
export default LocalPartnersField;
