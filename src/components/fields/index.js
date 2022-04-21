import ChipArrayField from "./ChipArrayField";
import LongTextField from "./LongTextField";
import StateField from "./StateField";
import TransactionLogsField from "./TransactionLogsField";

import { TextField, DateField, ChipField, BooleanField } from "react-admin";
const fields = {
  TextField,
  DateField,
  ChipField,
  BooleanField,

  // Custom
  ChipArrayField,
  LongTextField,

  // Workflow
  StateField,
  TransactionLogsField,
};

export default fields;
