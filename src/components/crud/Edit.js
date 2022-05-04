import React from "react";
import Form from "./Form";
import StyledEdit from "../forms/Edit";

const Create = (props) => (
  <StyledEdit {...props}>
    <Form />
  </StyledEdit>
);
export default Create;
