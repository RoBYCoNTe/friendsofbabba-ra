import {
  Group,
  GroupItem,
  GroupTitle,
  ReferenceListField,
  TextField,
  useFieldLabel,
} from "friendsofbabba-ra";
import React, { Fragment } from "react";

const PublicSpacesMediaField = ({ ...props }) => {
  const fieldLabel = useFieldLabel({ resource: "public-spaces-media" });
  return (
    <Fragment>
      <GroupTitle
        title={fieldLabel("media")}
        subTitle={fieldLabel("media.help")}
      />
      <Group {...props}>
        <GroupItem lg={12} md={12} sm={12} xs={12}>
          <ReferenceListField
            createLabel="ra.action.add"
            reference="public-spaces-media"
            target="public_space_id"
            tab={2}
            mobileBreakpoint="sm"
            mobilePrimaryText={(record) => record?.media?.filename}
          >
            <TextField source="media.filename" />
            <TextField
              label={fieldLabel("public_space_media_type_id")}
              source="public_space_media_type.name"
              sortable={false}
            />
          </ReferenceListField>
        </GroupItem>
      </Group>
    </Fragment>
  );
};

export default PublicSpacesMediaField;
