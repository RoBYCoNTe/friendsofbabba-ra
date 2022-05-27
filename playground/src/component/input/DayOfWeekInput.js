import React from "react";
import { SelectInput } from "react-admin";

const defaultChoices = [1, 2, 3, 4, 5, 6, 7].map((id) => ({ id, name: id }));
const DayOfWeekInput = (props) => (
  <SelectInput {...props} choices={defaultChoices} translateChoice={false} />
);

export default DayOfWeekInput;
