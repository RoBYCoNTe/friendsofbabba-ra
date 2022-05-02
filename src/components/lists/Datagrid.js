import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Datagrid as RaDatagrid } from "react-admin";
import { useSelector } from "react-redux";
import { LayoutContext } from "../Layout";
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
  }),
  rowEven: { backgroundColor: theme.palette.background.default },
}));

const Datagrid = ({ children, ...props }) => {
  const { drawerWidth } = useContext(LayoutContext);
  const sidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const classes = useStyles({ sidebarOpen, drawerWidth });
  return (
    <div className={classes.container}>
      <RaDatagrid classes={{ rowEven: classes.rowEven }} {...props}>
        {children}
      </RaDatagrid>
    </div>
  );
};

export default Datagrid;
