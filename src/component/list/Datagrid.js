import React, { useContext } from "react";

import { LayoutContext } from "../Layout";
import { Datagrid as RaDatagrid } from "react-admin";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const getWidthToSubtract = (w) => {
  return w + (window.innerWidth - document.documentElement.clientWidth);
};
const INNER_SIZE = 10;
const useStyles = makeStyles((theme) => ({
  container: ({ sidebarOpen, drawerWidth, inner }) => ({
    borderRadius: theme.shape.borderRadius,
    overflowX: "auto",
    overflowY: "hidden",
    maxWidth: `calc(100vw - ${
      sidebarOpen
        ? getWidthToSubtract(
            drawerWidth + theme.spacing(!inner ? 6 : INNER_SIZE) - 1
          )
        : getWidthToSubtract(58 + theme.spacing(!inner ? 6 : INNER_SIZE) - 1)
    }px)`,
    [theme.breakpoints.down("sm")]: {
      maxWidth: `calc(100vw - ${theme.spacing(!inner ? 6 : INNER_SIZE)}px)`,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      maxWidth: "100vw",
    },
  }),
  rowEven: { backgroundColor: theme.palette.background.default },
}));

const Datagrid = ({ children, evenOdd = true, inner = false, ...props }) => {
  const { drawerWidth } = useContext(LayoutContext);
  const sidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);

  const classes = useStyles({ sidebarOpen, drawerWidth, inner });
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
