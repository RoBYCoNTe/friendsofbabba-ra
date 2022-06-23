import React, { useMemo } from "react";

import PropTypes from "prop-types";
import { Resource } from "react-admin";
import { TableChart } from "@material-ui/icons";
import createCrud from "./createCrud";

const defaultIcon = TableChart;
const defaultGroup = "dashboard";

/**
 * Create a CRUD resource ready to be used in a react-admin.
 *
 * @param {Object} props
 *
 * @param {JSX.Element} props.icon
 *  The icon to use for the resource.
 *  Icon is displayed in the sidebar.
 *
 * @param {String} props.roles
 *  The roles that can access the resource.
 *  If not defined, the resource is accessible to all roles.
 *
 * @param {String} props.group
 *  The group to display the resource in the sidebar.
 *  If not defined, the resource is displayed in the "dashboard" group.
 *
 * @param {String} props.name
 *  The name of the resource.
 *
 * @param {Object} props.components
 *  List of custom components usable in the resource.
 *
 * @param {Boolean|null} props.workflow
 *  If true, the resource will be handled by the workflow.
 */
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
