import React, { useMemo } from 'react';

import CountableTextInput from './SmartTextInput';
import useFieldLabel from '../field/useFieldLabel';
import { useTranslate } from 'react-admin';

const TransactionNotesInput = (props) => {
	const translate = useTranslate();
	const fieldLabel = useFieldLabel({ resource: 'transactions' });
	const label = useMemo(
		() => props.label || fieldLabel('notes'),
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
