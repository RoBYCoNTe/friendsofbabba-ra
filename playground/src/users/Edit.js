import * as React from "react";
import { Edit as RaEdit } from "react-admin";
import Form from "./Form";
const Edit = (props) => (
  <RaEdit {...props}>
    <Form />
  </RaEdit>
);
export default Edit;
