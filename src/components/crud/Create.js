import React from "react";
import { Create as RaCreate } from "react-admin";
import useFormStyles from "../forms/useFormStyles";
import Form from "./Form";

const Create = (props) => {
  const classes = useFormStyles();
  return (
    <RaCreate {...props} classes={classes}>
      <Form />
    </RaCreate>
  );
};
export default Create;
