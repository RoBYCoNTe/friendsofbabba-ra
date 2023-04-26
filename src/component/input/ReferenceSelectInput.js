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
	...props
}) => {
	return (
		<ReferenceInput {...props}>
			<SelectInput
				optionText={optionText}
				helperText={helperText}
				fullWidth={fullWidth}
				sx={sx}
			/>
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
