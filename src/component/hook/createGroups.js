import { Dashboard } from "@material-ui/icons";
import { get } from "lodash";

const createMenuItem = (item, badges, translate) => ({
  localize: item.options.localize,
  badge: get(badges, `${item.name}`, null),
  order: get(item, "options.order", 0),
  label:
    item?.options?.label ||
    (item?.options?.localize === false
      ? item.name
      : translate(`menu.items.${item.name}`)),
  icon: item.icon,
  sub: item.options?.sub || item.sub,
  to: item.path || `/${item.name}`,
  order: item.options?.order || 100,
});

const createGroups = ({
  order,
  resources,
  permissions,
  badges,
  hasDashboard,
  items = [],
  translate,
  identity,
}) => {
  let groups = (
    hasDashboard
      ? [
          {
            path: "/",
            name: "dashboard",
            icon: Dashboard,
            options: {
              group: translate("menu.groups.dashboard"),
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
    .filter((item) =>
      item.options.accessible
        ? item.options.accessible(identity, permissions)
        : permissions &&
          (item.options.roles === undefined ||
            item.options.roles.filter((role) => permissions(role)).length > 0)
    )
    .reduce((groups, resource) => {
      let groupName = resource.options ? resource.options.group : "";
      let group = groups.find((g) => g.label === groupName);
      if (group) {
        group.items.push(createMenuItem(resource, badges, translate));
        group.items.sort((a, b) =>
          a.order > b.order ? 1 : a.order < b.order ? -1 : 0
        );
      } else {
        group = {
          label: groupName,
          items: [createMenuItem(resource, badges, translate)],
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
