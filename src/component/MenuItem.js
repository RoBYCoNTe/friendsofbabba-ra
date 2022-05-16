import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { createElement } from "react";

import Badge from "./Badge";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const isSelected = (location, to) => {
  const selected =
    location.pathname === to ||
    location.pathname.indexOf(`${to}?`) === 0 ||
    location.pathname.indexOf(`${to}/`) === 0;

  return selected;
};
const MenuItem = ({
  location,
  badge,
  to,
  icon,
  label,
  sub,
  onMenuClick,
  permissions,
  open,
  ...props
}) => {
  return (
    <ListItem
      {...props}
      button
      component={props.href ? "a" : Link}
      to={to}
      onClick={onMenuClick}
      selected={isSelected(location, to)}
    >
      <ListItemIcon>
        {badge && badge.show !== false ? (
          <Badge
            color={badge.color}
            variant={badge.variant}
            badgeContent={badge.value}
            overlap="rectangular"
          >
            {createElement(icon)}
          </Badge>
        ) : (
          createElement(icon)
        )}
      </ListItemIcon>
      {open && (
        <ListItemText
          primary={label}
          secondary={sub}
          primaryTypographyProps={{
            style: { whiteSpace: "normal" },
          }}
          secondaryTypographyProps={{
            style: { whiteSpace: "normal" },
          }}
        />
      )}
    </ListItem>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  badge: PropTypes.shape({
    show: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["standard", "dot", "dot-small"]),
    color: PropTypes.oneOf(["default", "primary", "secondary", "error"]),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  onMenuClick: PropTypes.func,
};

export default MenuItem;
