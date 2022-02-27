import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

const config = {
  dashboard: {
    icon: DashboardTwoToneIcon,
    order: 5,
    expanded: true,
  },
  reporting: {
    icon: ViewModuleIcon,
    order: 50,
    expanded: false,
  },
  admin: {
    icon: SettingsIcon,
    order: 100,
    expanded: true,
  },
};

export const isExpanded = (location, group) =>
  group.content &&
  group.content.some(
    (resource) =>
      location.pathname === `/${resource.to}` ||
      location.pathname === resource.to ||
      location.pathname.indexOf(`/${resource.to}?`) === 0 ||
      location.pathname.indexOf(`/${resource.to}/`) === 0
  );

export const isSelected = (location, resource) => {
  const selected =
    location.pathname === `/${resource.to}` ||
    location.pathname === resource.to ||
    location.pathname.indexOf(`/${resource.to}?`) === 0 ||
    (location.pathname.indexOf(`/${resource.to}/`) === 0 &&
      !location.pathname.endsWith("/create"));

  return selected;
};
export default config;
