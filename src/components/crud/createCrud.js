import List from "./List";
import Create from "./Create";
import Edit from "./Edit";
const createCrud = ({
  icon = null,
  options = {
    group: "admin",
    roles: ["admin"],
  },
  components = {
    grids: {},
    columns: {},
    forms: {},
    inputs: {},
  },
}) => ({
  icon,
  options: { ...options, components },
  list: List,
  edit: Edit,
  create: Create,
});

export default createCrud;
