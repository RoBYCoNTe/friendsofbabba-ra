import React, { useContext } from "react";

import { LayoutContext } from "../Layout";
import { Datagrid as RaDatagrid } from "react-admin";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const getWidthToSubtract = (w) => {
  return w + (window.innerWidth - document.documentElement.clientWidth);
};

const useStyles = makeStyles((theme) => ({
  container: ({ sidebarOpen, drawerWidth }) => ({
    maxWidth: `calc(100vw - ${
      sidebarOpen
        ? getWidthToSubtract(drawerWidth + theme.spacing(6) - 1)
        : getWidthToSubtract(58 + theme.spacing(6) - 1)
    }px)`,
    borderRadius: theme.shape.borderRadius,
    overflowX: "auto",
    overflowY: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      maxWidth: "100vw",
    },
  }),
  rowEven: { backgroundColor: theme.palette.background.default },
}));

const Datagrid = ({ children, evenOdd = true, ...props }) => {
  const { drawerWidth } = useContext(LayoutContext);
  const sidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);

  const classes = useStyles({ sidebarOpen, drawerWidth });
  return (
    <div className={classes.container}>
      <RaDatagrid
        classes={evenOdd ? { rowEven: classes.rowEven } : undefined}
        {...props}
      >
        {children}
      </RaDatagrid>
    </div>
  );
};

export default Datagrid;
