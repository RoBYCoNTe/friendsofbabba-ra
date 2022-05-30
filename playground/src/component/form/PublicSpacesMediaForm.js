import {
  MediaInput,
  ReferenceToolbar,
  useSaveMutation,
} from "ra-friendsofbabba";
import { SimpleForm, required } from "react-admin";

import PublicSpaceMediaTypeInput from "../input/PublicSpaceMediaTypeInput";
import React from "react";

const PublicSpacesMediaForm = (props) => {
  const save = useSaveMutation({ ...props });
  return (
    <SimpleForm
      {...props}
      toolbar={
        <ReferenceToolbar
          backTab={2}
          backReferenceTarget="public_space_id"
          backReference="public-spaces"
        />
      }
      save={save}
    >
      <PublicSpaceMediaTypeInput
        source="public_space_media_type_id"
        validate={required()}
      />
      <MediaInput source="media" validate={required()} title="filename" />
    </SimpleForm>
  );
};
export default PublicSpacesMediaForm;
