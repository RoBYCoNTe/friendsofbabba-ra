import List from "./List";
import Create from "./Create";
import Edit from "./Edit";
const createCrud = ({
  icon = null,
  list = List,
  create = Create,
  edit = Edit,
  options = {
    group: "admin",
    roles: ["admin"],
  },
  components = {
    grids: {},
    fields: {},
    forms: {},
    inputs: {},
  },
}) => ({
  icon,
  options: { ...options, components },
  list,
  edit,
  create,
});

export default createCrud;
