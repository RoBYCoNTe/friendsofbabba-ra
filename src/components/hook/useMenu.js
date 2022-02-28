import createGroups from "./createGroups";
import useBadges from "./useBadges";
import { useSelector } from "react-redux";

const { usePermissions, getResources } = require("ra-core");
const { useMemo } = require("react");
const { shallowEqual } = require("react-redux");

const useMenu = ({ order, hasDashboard, badges, items = [] }) => {
  const badgesMap = useBadges(badges);
  const { loaded, permissions } = usePermissions();
  const resources = useSelector(getResources, shallowEqual);
  const menu = useMemo(
    () =>
      loaded
        ? createGroups(
            order,
            resources,
            permissions,
            badgesMap,
            hasDashboard,
            items
          )
        : [],
    [order, resources, permissions, badgesMap, loaded, hasDashboard, items]
  );
  return menu;
};

export default useMenu;
