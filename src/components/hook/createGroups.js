import DashboardIcon from "@material-ui/icons/Dashboard";
import get from "lodash/get";

const createMenuItem = (resource, badges) => ({
  badge: get(badges, `${resource.name}`, null),
  order: get(resource, "options.order", 0),
  label: resource.name,
  icon: resource.icon,
  to: resource.path || `/${resource.name}`,
});

const createGroups = (config, resources, permissions, badges, hasDashboard) => {
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
        group.content.push(createMenuItem(resource, badges));
        group.content.sort((a, b) =>
          a.order > b.order ? 1 : a.order < b.order ? -1 : 0
        );
      } else {
        group = {
          icon: get(config, `[${groupName}].icon`),
          label: groupName,
          order: get(config, `[${groupName}].order`, 1000),
          content: [createMenuItem(resource, badges)],
          expanded: get(config, `[${groupName}].expanded`, false),
        };
        groups.push(group);
      }
      return groups;
    }, []);

  groups.sort((a, b) => (a.order > b.order ? 1 : a.order < b.order ? -1 : 0));
  return groups;
};

export default createGroups;
