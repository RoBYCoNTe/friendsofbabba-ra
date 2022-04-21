import DebouncedTextInput from "./DebouncedTextInput";
import React from "react";

const convertStringToNumber = (value) => {
  const float = parseFloat(value);

  return isNaN(float) ? null : float;
};

const DebouncedNumberInput = (props) => (
  <DebouncedTextInput {...props} type="number" parse={convertStringToNumber} />
);
export default DebouncedNumberInput;
