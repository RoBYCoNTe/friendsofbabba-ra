import * as React from "react";
import { Edit as RaEdit } from "react-admin";
import Form from "./Form";
const Edit = (props) => (
  <RaEdit {...props}>
    <Form redirect={false} refresh />
  </RaEdit>
);
export default Edit;
