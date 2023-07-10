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
	return (
		<ReferenceInput {...props}>
			<SelectInput
				optionText={optionText}
				helperText={helperText}
				fullWidth={fullWidth}
				disabled={disabled}
				sx={sx}
				isRequired={isRequired}
			/>
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
