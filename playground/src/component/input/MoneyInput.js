import { DebouncedNumberInput } from "friendsofbabba-ra";
import { InputAdornment } from "@material-ui/core";
import React from "react";

const MoneyInput = (props) => (
  <DebouncedNumberInput
    {...props}
    InputProps={{
      endAdornment: <InputAdornment position="end">€</InputAdornment>,
    }}
  />
);
export default MoneyInput;
