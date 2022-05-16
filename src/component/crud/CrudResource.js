import React, { useMemo } from "react";

import PropTypes from "prop-types";
import { Resource } from "react-admin";
import TableChart from "@material-ui/icons/TableChart";
import createCrud from "./createCrud";

const defaultIcon = TableChart;
const defaultGroup = "dashboard";

const CrudResource = ({
  icon,
  roles,
  group,
  options,
  workflow = undefined,
  components,
  ...props
}) => {
  const crudProps = useMemo(
    () =>
      createCrud({
        icon,
        options: {
          ...options,
          roles,
          group,
        },
        components,
      }),
    [icon, roles, group, options, components]
  );
  return <Resource {...crudProps} {...props} />;
};

CrudResource.propTypes = {
  name: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string),
  group: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  list: PropTypes.elementType,
  edit: PropTypes.elementType,
  create: PropTypes.elementType,
  options: PropTypes.object,
  components: PropTypes.object,
};
CrudResource.defaultProps = {
  icon: defaultIcon,
  group: defaultGroup,
  components: {},
  workflow: true,
};

export default CrudResource;
