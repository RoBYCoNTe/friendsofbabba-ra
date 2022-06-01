import React, { Fragment } from "react";

import { Divider } from "@material-ui/core";
import RecordInput from "./RecordInput";
import { TextField } from "react-admin";

const LanguageMessageInput = (props) => (
  <Fragment>
    <TextField {...props} source="code" variant="caption" fullWidth />
    <Divider />
    <RecordInput {...props} fullWidth />
  </Fragment>
);
export default LanguageMessageInput;
