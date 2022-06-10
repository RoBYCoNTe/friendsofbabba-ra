import { useContext, useMemo } from "react";

import { CrudContext } from "../../data/cakephp/crud/CrudContext";

const { getResources } = require("ra-core");
const { shallowEqual, useSelector } = require("react-redux");
const { get } = require("lodash");

const useCustomComponents = (resource) => {
  const { components } = useContext(CrudContext);
  const resources = useSelector(getResources, shallowEqual);
  return useMemo(() => {
    const r = resources.find((r) => r.name === resource);
    return {
      ...get(r, "options.components"),
      ...components,
    };
  }, [components, resources, resource]);
};
export default useCustomComponents;
