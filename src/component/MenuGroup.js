import { Divider, List, ListSubheader, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  subHeader: {
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
}));

const MenuGroup = ({ children, open, label, ...props }) => {
  const classes = useStyles();

  return (
    <List
      subheader={
        open ? (
          <ListSubheader className={classes.subHeader}>{label}</ListSubheader>
        ) : null
      }
    >
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          React.cloneElement(child, { open, ...props })
      )}
      <Divider />
    </List>
  );
};

MenuGroup.propTypes = {
  /** Children to render inside the MenuGroup */
  children: PropTypes.node,
  /** Indicates if sidebar is open or not. */
  open: PropTypes.bool,
  /** Label to use for this group. */
  label: PropTypes.string.isRequired,
  /** Name of the groups to merge. */
  group: PropTypes.string,
};

export default MenuGroup;
