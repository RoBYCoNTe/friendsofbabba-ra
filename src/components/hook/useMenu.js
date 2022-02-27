import createGroups from "./createGroups";
// import useBadges from "./useBadges";
import { useSelector } from "react-redux";

const { usePermissions, getResources } = require("ra-core");
const { useMemo } = require("react");
const { shallowEqual } = require("react-redux");

const useMenu = ({ hasDashboard, config = {} }) => {
  // const { data: badges } = useBadges();
  const { loaded, permissions } = usePermissions();
  const resources = useSelector(getResources, shallowEqual);
  const menu = useMemo(
    () =>
      loaded
        ? createGroups(config, resources, permissions, [], hasDashboard)
        : [],
    [resources, permissions, loaded, config, hasDashboard]
  );
  return menu;
};

export default useMenu;
