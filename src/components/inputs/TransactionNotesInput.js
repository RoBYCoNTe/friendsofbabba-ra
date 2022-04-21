import React, { useMemo } from "react";

import DebouncedTextInput from "./DebouncedTextInput";
import { useTranslate } from "react-admin";
import useFieldLabel from "../fields/useFieldLabel";

const TransactionNotesInput = (props) => {
  const translate = useTranslate();
  const fieldLabel = useFieldLabel({ resource: "transactions" });
  const label = useMemo(
    () => props.label || fieldLabel("notes"),
    [props.label, fieldLabel]
  );
  const helperText = useMemo(
    () => translate(props.helperText),
    [props.helperText, translate]
  );
  return (
    <DebouncedTextInput
      {...props}
      label={label}
      helperText={helperText}
      maxLength={1500}
      multiline
    />
  );
};
export default TransactionNotesInput;
