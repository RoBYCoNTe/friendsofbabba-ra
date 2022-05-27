import { IconButton, Toolbar, useMediaQuery } from "@material-ui/core";
import { LoadingIndicator, useGetIdentity, useTranslate } from "react-admin";
import React, { useCallback } from "react";
import {
  useIsImpersonating,
  useUndoImpersonate,
} from "../data/createAuthProvider";

import MenuIcon from "@material-ui/icons/Menu";
import { AppBar as MuiAppBar } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import UserMenu from "./UserMenu";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { toggleSidebar } from "ra-core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  titleSidebarClose: {
    marginLeft: theme.spacing(2),
  },
  appBar: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: ({ drawerWidth }) => ({
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth - 2}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: -20,
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
  hide: {
    display: "none",
  },
  spacer: {
    flex: 1,
    flexGrow: 1,
  },
  welcome: {
    lineHeight: "1.2em",
  },
  undoImpersonate: {
    display: "block",
    clear: "both",
    marginTop: -theme.spacing(0.5),
    fontSize: 12,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const AppBar = ({
  open,
  logout,
  drawerWidth,
  location,
  userMenu = UserMenu,
}) => {
  const classes = useStyles({ drawerWidth });
  const dispatch = useDispatch();
  const translate = useTranslate();
  const isImpersonating = useIsImpersonating();
  const undoImpersonate = useUndoImpersonate();
  const handleUndoClick = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      undoImpersonate();
    },
    [undoImpersonate]
  );
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const { identity } = useGetIdentity();
  const handleToggleSidebar = useCallback(
    () => dispatch(toggleSidebar()),
    [dispatch]
  );
  return (
    <MuiAppBar
      position="fixed"
      color="secondary"
      className={classnames(classes.appBar, {
        [classes.appBarShift]: open && !isXSmall,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleSidebar}
          edge="start"
          className={classnames(classes.menuButton, {
            [classes.hide]: open && !isXSmall,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classnames(classes.title, {
            [classes.titleSidebarClose]: !open,
          })}
          variant="h6"
          id="react-admin-title"
          noWrap
        />
        {!isXSmall && <div className={classes.spacer} />}
        {!isXSmall && (
          <Typography
            variant="body1"
            component="div"
            className={classes.welcome}
          >
            {translate("app.welcome", identity)}
            {isImpersonating && (
              <Typography
                variant="body1"
                display="block"
                onClick={handleUndoClick}
                className={classes.undoImpersonate}
              >
                {translate("ra.auth.impersonating.undo", identity)}
              </Typography>
            )}
          </Typography>
        )}
        <LoadingIndicator />
        {React.createElement(userMenu, { logout, location })}
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  logout: PropTypes.element.isRequired,
  drawerWidth: PropTypes.number.isRequired,
  userMenu: PropTypes.elementType,
};

export default AppBar;
