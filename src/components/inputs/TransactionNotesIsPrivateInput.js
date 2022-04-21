import { BooleanInput } from "react-admin";
import React from "react";
import useFieldLabel from "../fields/useFieldLabel";

const TransactionNotesIsPrivateInput = ({
  label,
  helperText,
  admin = false,
  ...props
}) => {
  const fieldLabel = useFieldLabel({ resource: "transactions" });
  if (!admin) {
    return null;
  }

  return (
    <BooleanInput
      label={label || fieldLabel("is_private", false)}
      helperText={helperText || fieldLabel("is_private.helper_text")}
      source="is_private"
      {...props}
    />
  );
};
export default TransactionNotesIsPrivateInput;
