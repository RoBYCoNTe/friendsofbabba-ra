import { Create, Edit, useTranslate } from "react-admin";

import { PublicSpacesMediaForm } from "../component";

const PublicSpacesMediaTitle = ({ record }) => {
  const translate = useTranslate();
  const prefix = translate("resources.public-spaces-media.name", {
    smart_count: 1,
  });
  return `${prefix} ${record?.public_space_media_type?.name} (${record?.id})`;
};

const PublicSpacesMediaCreate = (props) => (
  <Create {...props}>
    <PublicSpacesMediaForm />
  </Create>
);

const PublicSpaceMediaEdit = (props) => (
  <Edit {...props} title={<PublicSpacesMediaTitle />}>
    <PublicSpacesMediaForm />
  </Edit>
);

const config = {
  create: PublicSpacesMediaCreate,
  edit: PublicSpaceMediaEdit,
};

export default config;
