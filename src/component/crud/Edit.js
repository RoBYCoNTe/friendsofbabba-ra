import Form from "./Form";
import { Edit as RaEdit } from "react-admin";
import React from "react";

const Create = (props) => (
  <RaEdit {...props}>
    <Form />
  </RaEdit>
);
export default Create;
