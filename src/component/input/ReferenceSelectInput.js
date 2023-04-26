import React from 'react';

import {
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const ReferenceSelectInput = ({
	optionText,
	helperText,
	fullWidth = false,
	...props
}) => {
	return (
		<ReferenceInput {...props}>
			<SelectInput
				optionText={optionText}
				helperText={helperText}
				fullWidth={fullWidth}
			/>
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
