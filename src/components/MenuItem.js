import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { createElement } from "react";

import Badge from "./Badge";
import { Link } from "react-router-dom";
import { isSelected } from "./config/sidebar";
import { useTranslate } from "react-admin";

const MenuItem = ({ location, resource, onMenuClick }) => {
  const translate = useTranslate();

  return (
    <ListItem
      button
      component={Link}
      to={resource.to}
      onClick={onMenuClick}
      selected={isSelected(location, resource)}
    >
      <ListItemIcon>
        {resource.badge && resource.badge.show ? (
          <Badge
            color={resource.badge.type}
            variant={resource.badge.variant}
            badgeContent={resource.badge.value}
          >
            {createElement(resource.icon)}
          </Badge>
        ) : (
          createElement(resource.icon)
        )}
      </ListItemIcon>
      <ListItemText
        primary={
          resource.localize !== false
            ? translate(`menu.items.${resource.label}`)
            : resource.label
        }
      />
    </ListItem>
  );
};

export default MenuItem;
