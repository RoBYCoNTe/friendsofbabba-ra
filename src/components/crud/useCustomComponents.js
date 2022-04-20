const { getResources } = require("ra-core");
const { shallowEqual, useSelector } = require("react-redux");
const { get } = require("lodash");
const useCustomComponents = (resource) => {
  const resources = useSelector(getResources, shallowEqual);
  const r = resources.find((r) => r.name === resource);

  return get(r, "options.components");
};
export default useCustomComponents;
