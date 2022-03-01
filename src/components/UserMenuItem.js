import * as React from "react";

import { ListItemIcon, MenuItem } from "@material-ui/core";

import ExitIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme) => ({
    menuItem: {
      color: theme.palette.text.secondary,
    },
    icon: { minWidth: theme.spacing(5) },
  }),
  { name: "RaUserMenuItem" }
);

const UserMenuItem = React.forwardRef(function UserMenuItem(props, ref) {
  const {
    className,
    classes: classesOverride,
    redirectTo,
    icon,

    label,
    ...rest
  } = props;

  const classes = useStyles(props);

  return (
    <MenuItem
      className={classnames("user-menu-item", classes.menuItem, className)}
      ref={ref}
      component={props.to ? Link : "a"}
      {...rest}
    >
      <ListItemIcon className={classes.icon}>
        {icon ? icon : <ExitIcon />}
      </ListItemIcon>
      {label}
    </MenuItem>
  );
});

UserMenuItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default UserMenuItem;
