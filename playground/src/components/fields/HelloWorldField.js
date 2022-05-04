import React from "react";
import { Typography } from "@material-ui/core";
import { get } from "lodash";

const HelloWorldField = ({ source, record, sortBy, basePath, ...props }) => {
  const value = get(record, source);
  return <Typography {...props}>Hello, {value}!</Typography>;
};
export default HelloWorldField;
