import React, { useMemo } from "react";

import { useTranslate } from "react-admin";

import useFieldLabel from "../field/useFieldLabel";
import CountableTextInput from "./CountableTextInput";

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
		<CountableTextInput
			{...props}
			label={label}
			helperText={helperText}
			maxLength={1500}
			multiline
		/>
	);
};
export default TransactionNotesInput;
