import { Grid } from "@material-ui/core";
import React from "react";

const GroupItem = ({
  children,
  lg = 4,
  md = 6,
  sm = 12,
  xs = 12,
  spacing,
  block,
  ...props
}) => (
  <Grid item lg={lg} md={md} sm={sm} xs={xs} spacing={spacing}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { ...props, ...child.props })
        : child
    )}
  </Grid>
);
export default GroupItem;
