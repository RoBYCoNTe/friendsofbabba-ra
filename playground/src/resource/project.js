import { Create, Edit, useTranslate } from "react-admin";

import Icon from "@material-ui/icons/DashboardOutlined";
import { ProjectForm } from "../component";
import { ProjectList } from "../component/list";

const ProjectTitle = ({ record }) => {
  const translate = useTranslate();
  const prefix = translate("resources.projects.name", {
    smart_count: 1,
  });
  return `${prefix} ${record?.code} (${record?.id})`;
};

const ProjectCreate = (props) => (
  <Create {...props}>
    <ProjectForm create />
  </Create>
);

const ProjectEdit = (props) => (
  <Edit {...props} title={<ProjectTitle />}>
    <ProjectForm />
  </Edit>
);

const config = {
  list: ProjectList,
  create: ProjectCreate,
  edit: ProjectEdit,
  icon: Icon,
  options: {
    group: "dashboard",
    roles: ["user", "admin"],
  },
};

export default config;
