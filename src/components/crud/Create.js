import React from "react";
import { Create as RaCreate } from "react-admin";
import Form from "./Form";

const Create = (props) => (
  <RaCreate {...props}>
    <Form />
  </RaCreate>
);
export default Create;
