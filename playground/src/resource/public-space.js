import { Create, Edit, useTranslate } from "react-admin";

import { PublicSpaceForm } from "../component";

const PublicSpaceTitle = ({ record }) => {
  const translate = useTranslate();
  const prefix = translate("resources.public-spaces.name", { smart_count: 1 });
  return `${prefix} ${record?.name} (${record?.id})`;
};
const PublicSpaceCreate = (props) => (
  <Create {...props}>
    <PublicSpaceForm create />
  </Create>
);

const PublicSpaceEdit = (props) => (
  <Edit {...props} title={<PublicSpaceTitle />}>
    <PublicSpaceForm />
  </Edit>
);

const config = {
  create: PublicSpaceCreate,
  edit: PublicSpaceEdit,
};

export default config;
