import { getResources, useGetIdentity, useTranslate } from "react-admin";

import { List } from "@material-ui/core";
import MenuGroup from "./MenuGroup";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import React from "react";
import compose from "../compose";
import { connect } from "react-redux";
import useMenu from "./hook/useMenu";
import { usePermissions } from "ra-core";
import { withRouter } from "react-router-dom";

const Menu = ({
  hasDashboard,
  open,
  location,
  onMenuClick,
  badges,
  items,
  children,
  mode = "build",
  order,
}) => {
  const { loading, loaded, identity } = useGetIdentity();
  const { permissions } = usePermissions();
  const menu = useMenu({ order, hasDashboard, badges, items });

  const translate = useTranslate();
  if (loading || !loaded || identity === null || identity.id <= 0) {
    return null;
  }

  return (
    <List component="nav">
      {mode === "build" &&
        menu.map((group, idx) => (
          <MenuGroup
            key={idx}
            open={open}
            label={translate(`menu.groups.${group.label}`)}
          >
            {group.items.map((item, index) => (
              <MenuItem
                {...item}
                key={index}
                location={location}
                onMenuClick={onMenuClick}
              />
            ))}
          </MenuGroup>
        ))}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          open,
          menu,
          location,
          permissions,
          onMenuClick,
        })
      )}
    </List>
  );
};

Menu.propTypes = {
  hasDashboard: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  onMenuClick: PropTypes.func,
  /** List of custom menu items that will be merged with existing menu. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Name of the menu item. */
      name: PropTypes.string.isRequired,
      /** Icon used for this menu item. */
      icon: PropTypes.elementType.isRequired,
      /** Path connected to the routing system (ex. /posts). */
      path: PropTypes.string,
      /** List of roles allowed. */
      roles: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  /**
   * Indicates generation mode for menu. If you want to compose it use custom
   * and create your own menu using MenuGroup and MenuItems.
   **/
  mode: PropTypes.oneOf(["build", "custom"]),
  /** Allows configuration of groups */
  order: PropTypes.object,
  badges: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.objectOf({
        show: PropTypes.bool,
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        color: PropTypes.oneOf(["primary", "secondary", "default"]),
      })
    ),
  ]),
};

export default compose(
  withRouter,
  connect((state) => ({
    open: state.admin.ui.sidebarOpen,
    resources: getResources(state),
  }))
)(Menu);
