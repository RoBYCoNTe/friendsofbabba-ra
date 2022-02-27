import { Divider, List, ListSubheader, makeStyles } from "@material-ui/core";
import { getResources, useGetIdentity, useTranslate } from "react-admin";

import MenuItem from "./MenuItem";
import React from "react";
import compose from "../compose";
import { connect } from "react-redux";
import useMenu from "./hook/useMenu";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  subHeader: {
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
}));

const Menu = ({ hasDashboard, open, location, onMenuClick, menuConfig }) => {
  const { loading, loaded, identity } = useGetIdentity();
  const menu = useMenu({ hasDashboard, config: menuConfig });

  const classes = useStyles();
  const translate = useTranslate();
  if (loading || !loaded || identity === null || identity.id <= 0) {
    return null;
  }

  return (
    <List component="nav" className={classes.root}>
      {menu.map((group, idx) => (
        <List
          key={idx}
          subheader={
            open ? (
              <ListSubheader className={classes.subHeader}>
                {translate(`menu.groups.${group.label}`)}
              </ListSubheader>
            ) : null
          }
        >
          {group.content.map((resource, index) => (
            <MenuItem
              key={index}
              resource={resource}
              location={location}
              onMenuClick={onMenuClick}
            />
          ))}
          <Divider />
        </List>
      ))}
    </List>
  );
};

export default compose(
  withRouter,
  connect((state) => ({
    open: state.admin.ui.sidebarOpen,
    resources: getResources(state),
  }))
)(Menu);
