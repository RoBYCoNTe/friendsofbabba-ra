import {
  Drawer,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React, { useCallback } from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PropTypes from "prop-types";
import classnames from "classnames";
import { toggleSidebar } from "ra-core";
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
