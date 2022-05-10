import { Grid } from "@material-ui/core";
import React from "react";

const Group = ({ children, spacing = 2, wrapper = false, ...props }) =>
  !wrapper ? (
    <Grid container spacing={spacing}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...props, ...child.props })
          : child
      )}
    </Grid>
  ) : (
    React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { ...props, ...child.props })
        : child
    )
  );

export default Group;
