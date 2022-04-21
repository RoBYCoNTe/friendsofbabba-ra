import React from "react";
import { CheckboxGroupInput, ReferenceArrayInput } from "react-admin";
import useManyFormatter from "../../data/cakephp/useManyFormatter";
import useManyParser from "../../data/cakephp/useManyParser";
const ReferenceCheckboxGroupInput = ({ optionText, ...props }) => {
  const parse = useManyParser();
  const format = useManyFormatter();
  return (
    <ReferenceArrayInput {...props} parse={parse} format={format}>
      <CheckboxGroupInput optionText={optionText} />
    </ReferenceArrayInput>
  );
};
export default ReferenceCheckboxGroupInput;
