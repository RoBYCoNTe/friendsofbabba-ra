import React from "react";
import { Edit as RaEdit } from "react-admin";
import Form from "./Form";

const Create = (props) => (
  <RaEdit {...props}>
    <Form />
  </RaEdit>
);
export default Create;
