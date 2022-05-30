import { DebouncedNumberInput } from "ra-friendsofbabba";
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
