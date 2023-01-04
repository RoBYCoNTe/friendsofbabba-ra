import { CheckboxGroupInput, ReferenceArrayInput } from "react-admin";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useManyFormatter from "../../data/cakephp/useManyFormatter";
import useManyParser from "../../data/cakephp/useManyParser";

const useStyles = makeStyles((theme) => ({
  root: {
    "& legend": {
      marginBottom: theme.spacing(1),
    },
  },
}));
const ReferenceCheckboxGroupInput = ({ optionText, ...props }) => {
  const parse = useManyParser();
  const format = useManyFormatter();
  const classes = useStyles();
  return (
    <ReferenceArrayInput {...props} parse={parse} format={format}>
      <CheckboxGroupInput classes={classes} optionText={optionText} />
    </ReferenceArrayInput>
  );
};
export default ReferenceCheckboxGroupInput;
