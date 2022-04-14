import List from "./List";
const createCrud = ({
  icon = null,
  options = { group: "admin", roles: ["admin"] },
}) => ({
  icon,
  options,
  list: List,
});

export default createCrud;
