import { CheckboxGroupInput, ReferenceArrayInput } from "react-admin";
import { createManyFormatter, createManyParser } from "../../index";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& legend": {
      marginBottom: theme.spacing(1),
    },
  },
}));
const ReferenceCheckboxGroupInput = ({
  optionText,
  parse = createManyParser(),
  format = createManyFormatter(),
  ...props
}) => {
  const classes = useStyles();
  return (
    <ReferenceArrayInput {...props} parse={parse} format={format}>
      <CheckboxGroupInput classes={classes} optionText={optionText} />
    </ReferenceArrayInput>
  );
};
export default ReferenceCheckboxGroupInput;
