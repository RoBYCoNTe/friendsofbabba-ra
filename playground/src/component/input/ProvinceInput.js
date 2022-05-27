import { ReferenceInput, SelectInput } from "react-admin";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    minWidth: 100,
  },
}));

const ProvinceInput = (props) => {
  const classes = useStyles();
  return (
    <ReferenceInput
      {...props}
      reference="municipalities/provinces"
      className={classes.input}
    >
      <SelectInput optionText="name" optionValue="id" />
    </ReferenceInput>
  );
};
export default ProvinceInput;
