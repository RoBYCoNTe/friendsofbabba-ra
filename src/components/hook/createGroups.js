import DashboardIcon from "@material-ui/icons/Dashboard";
import get from "lodash/get";

const createMenuItem = (item, badges) => ({
  localize: item.options.localize,
  badge: get(badges, `${item.name}`, null),
  order: get(item, "options.order", 0),
  label: item.name,
  icon: item.icon,
  to: item.path || `/${item.name}`,
});

const createGroups = (
  order,
  resources,
  permissions,
  badges,
  hasDashboard,
  items = []
) => {
  let groups = (
    hasDashboard
      ? [
          {
            path: "/",
            name: "dashboard",
            icon: DashboardIcon,
            options: {
              group: "dashboard",
            },
          },
        ]
      : []
  )
    .concat(resources.filter((r) => r.hasList && r.options && r.icon))
    .concat(
      items.map((i) => ({
        ...i,
        options: {
          roles: i.roles,
          group: i.group,
          localize: i.localize,
        },
      }))
    )
    .filter(
      (item) =>
        permissions &&
        (item.options.roles === undefined ||
          item.options.roles.filter((role) => permissions(role)).length > 0)
    )
    .reduce((groups, resource) => {
      let groupName = resource.options ? resource.options.group : "";
      let group = groups.find((g) => g.label === groupName);
      if (group) {
        group.items.push(createMenuItem(resource, badges));
        group.items.sort((a, b) =>
          a.order > b.order ? 1 : a.order < b.order ? -1 : 0
        );
      } else {
        group = {
          label: groupName,
          items: [createMenuItem(resource, badges)],
          order: get(order, groupName, 1000),
        };
        groups.push(group);
      }
      return groups;
    }, []);

  groups.sort((a, b) => (a.order > b.order ? 1 : a.order < b.order ? -1 : 0));
  return groups;
};

export default createGroups;
