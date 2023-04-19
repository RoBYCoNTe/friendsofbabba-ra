import Create from "./CrudCreate";
import Edit from "./CrudEdit";
import List from "./CrudList";

const createCrud = ({
	icon = null,
	list = List,
	create = Create,
	edit = Edit,
	options = {
		group: "settings",
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
