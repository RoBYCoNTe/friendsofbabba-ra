import React from "react";
import { SelectInput } from "react-admin";

const defaultChoices = [1, 2, 3, 4, 5, 6, 7, 8].map((id) => ({ id, name: id }));

const WorkingHoursInput = (props) => (
  <SelectInput {...props} choices={defaultChoices} translateChoice={false} />
);
export default WorkingHoursInput;
