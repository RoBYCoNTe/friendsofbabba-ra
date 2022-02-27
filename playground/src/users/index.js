import PeopleIcon from "@material-ui/icons/People";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import UserList from "./UserList";
import UserShow from "./UserShow";

const config = {
  list: UserList,
  create: UserCreate,
  edit: UserEdit,
  show: UserShow,
  icon: PeopleIcon,
  options: {
    group: "admin",
  },
};

export default config;
