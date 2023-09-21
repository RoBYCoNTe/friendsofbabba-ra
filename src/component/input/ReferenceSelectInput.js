import React from 'react';

import {
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const ReferenceSelectInput = ({
	optionText,
	helperText,
	fullWidth = false,
	sx = {},
	disabled = false,
	isRequired = false,
	...props
}) => {
	const selectProps = {
		optionText: optionText,
		helperText: helperText,
		fullWidth: fullWidth,
		sx: sx,
		disabled: disabled === true ? true : undefined,
		isRequired
	};

	return (
		<ReferenceInput {...props}>
			<SelectInput {...selectProps} />
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
