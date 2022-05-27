import { Create, Edit } from "react-admin";

import HumanResourceForm from "../component/form/HumanResourceForm";

const HumanResourceCreate = (props) => (
  <Create {...props}>
    <HumanResourceForm />
  </Create>
);

const HumanResourceEdit = (props) => (
  <Edit {...props}>
    <HumanResourceForm />
  </Edit>
);

const config = {
  create: HumanResourceCreate,
  edit: HumanResourceEdit,
};

export default config;
