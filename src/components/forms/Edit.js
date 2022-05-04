import React from "react";
import { Edit as RaEdit } from "react-admin";
import useFormStyles from "./useFormStyles";

const Create = ({ children, ...props }) => {
  const classes = useFormStyles();
  return (
    <RaEdit {...props} classes={classes}>
      {children}
    </RaEdit>
  );
};
export default Create;
