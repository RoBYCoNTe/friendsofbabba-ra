import React, { Fragment } from "react";
import { Filter } from "react-admin";
import useFiltersStyles from "./useFiltersStyles";

const Filters = ({ children, ...props }) => {
  const classes = useFiltersStyles();
  return (
    <Filter classes={classes} {...props}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child ? child : <Fragment />, {
          key: i,
          fullWidth: true,
        })
      )}
    </Filter>
  );
};
export default Filters;
