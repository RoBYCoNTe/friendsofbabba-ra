import React from 'react';

import { ReferenceInput, SelectInput } from 'react-admin';

const ReferenceSelectInput = ({
	optionText,
	helperText,
	fullWidth = false,
	sx = {},
	disabled = false,
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
			/>
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
