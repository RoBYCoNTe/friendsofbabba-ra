import { Grid } from "@material-ui/core";
import React from "react";

/**
 * Renders a group of fields using MUI grids.
 * You can use cascading groups to create a form layout.
 *
 * @returns {React.Component} A React component
 *
 * @example
 * import { Group, GroupItem } from "ra-friendsofbabba";
 *
 * <Group {...props}>
 *     <GroupItem lg={2} md={2} sm={2} xs={12}>
 *         <TextInput source="name" />
 *     </GroupItem>
 *     <GroupItem lg={2} md={2} sm={2} xs={12}>
 *         <TextInput source="lastName" />
 *     </GroupItem>
 * </Group>
 *
 */
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
