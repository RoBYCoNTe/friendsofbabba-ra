import { Create, Edit } from "react-admin";

import { LocalPartnerForm } from "../component/form";

const LocalPartnerCreate = (props) => (
  <Create {...props}>
    <LocalPartnerForm />
  </Create>
);

const LocalPartnerEdit = (props) => (
  <Edit {...props}>
    <LocalPartnerForm />
  </Edit>
);

const config = {
  create: LocalPartnerCreate,
  edit: LocalPartnerEdit,
};
export default config;
