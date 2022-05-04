import React from "react";
import Form from "./Form";
import StyledCreate from "../forms/Create";
const Create = (props) => {
  return (
    <StyledCreate {...props}>
      <Form />
    </StyledCreate>
  );
};
export default Create;
