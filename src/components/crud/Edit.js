import React from "react";
import { Edit as RaEdit } from "react-admin";
import useFormStyles from "../forms/useFormStyles";
import Form from "./Form";

const Create = (props) => {
  const classes = useFormStyles();
  return (
    <RaEdit {...props} classes={classes}>
      <Form />
    </RaEdit>
  );
};
export default Create;
