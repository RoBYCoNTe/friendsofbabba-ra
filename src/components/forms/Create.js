import React from "react";

import { Create as RaCreate } from "react-admin";
import useFormStyles from "./useFormStyles";

const Create = ({ children, ...props }) => {
  const classes = useFormStyles();
  return (
    <RaCreate {...props} classes={classes}>
      {children}
    </RaCreate>
  );
};
export default Create;
