import Create from "./Create";
import Edit from "./Edit";
import List from "./List";

const createCrud = ({
  icon = null,
  list = List,
  create = Create,
  edit = Edit,
  options = {
    group: "admin",
    roles: ["admin"],
  },
  components = {},
}) => ({
  icon,
  options: { ...options, components },
  list,
  edit,
  create,
});

export default createCrud;
