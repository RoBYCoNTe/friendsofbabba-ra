import createGroups from "./createGroups";
import { useSelector } from "react-redux";

const { usePermissions, getResources, useTranslate } = require("ra-core");
const { useMemo } = require("react");
const { shallowEqual } = require("react-redux");

const useMenu = ({ order, hasDashboard, badges, items = [] }) => {
  const translate = useTranslate();
  const { loaded, permissions } = usePermissions();
  const resources = useSelector(getResources, shallowEqual);
  const menu = useMemo(
    () =>
      loaded
        ? createGroups({
            order,
            resources,
            permissions,
            badges,
            hasDashboard,
            items,
            translate,
          })
        : [],
    [
      order,
      resources,
      permissions,
      badges,
      loaded,
      hasDashboard,
      items,
      translate,
    ]
  );
  return menu;
};

export default useMenu;
