import Form from "./Form";
import { Create as RaCreate } from "react-admin";
import React from "react";

const Create = (props) => {
  return (
    <RaCreate {...props}>
      <Form />
    </RaCreate>
  );
};
export default Create;
