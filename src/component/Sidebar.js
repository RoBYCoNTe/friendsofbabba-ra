import {
  Drawer,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { toggleSidebar, useGetIdentity, useTranslate } from "ra-core";
import {
  useIsImpersonating,
  useUndoImpersonate,
} from "../data/createAuthProvider";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  brand: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    flexGrow: 1,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(-0.5),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  drawer: {
    zIndex: 10,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: ({ drawerWidth }) => ({
    width: drawerWidth - 1,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  undoImpersonate: {
    display: "block",
    clear: "both",
    marginTop: -theme.spacing(0.5),
    fontSize: 12,
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.secondary,
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.main,
    },
  },
}));
const Sidebar = ({
  children,
  open,
  drawerWidth,
  appTitle,
  appSubTitle,
  appVersion,
}) => {
  const classes = useStyles({ drawerWidth });
  const dispatch = useDispatch();
  const handleToggleSidebar = useCallback(
    () => dispatch(toggleSidebar()),
    [dispatch]
  );
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const translate = useTranslate();
  const { identity } = useGetIdentity();
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
  return (
    <Drawer
      open={open}
      onClose={handleToggleSidebar}
      variant={isXSmall ? "temporary" : "permanent"}
      className={classnames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classnames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.brand}>
          <Typography
            className={classes.title}
            href="/"
            variant="h6"
            color="inherit"
          >
            {appTitle}
          </Typography>
          <Typography color="textSecondary" variant="caption">
            {appSubTitle} ({appVersion})
          </Typography>
          {isImpersonating && isXSmall && (
            <Typography
              variant="body1"
              display="block"
              onClick={handleUndoClick}
              className={classes.undoImpersonate}
            >
              {translate("ra.auth.impersonating.undo.short", identity)}
            </Typography>
          )}
        </div>
        <IconButton onClick={handleToggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onMenuClick: isXSmall ? handleToggleSidebar : undefined,
        })
      )}
    </Drawer>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  config: PropTypes.object,
  drawerWidth: PropTypes.number.isRequired,
  appName: PropTypes.string,
  appSubTitle: PropTypes.string,
  appVersion: PropTypes.string,
};

export default Sidebar;
