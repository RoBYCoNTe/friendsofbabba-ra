import React from 'react';

import {
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const ReferenceSelectInput = ({ optionText, helperText, ...props }) => {
	return (
		<ReferenceInput {...props}>
			<SelectInput optionText={optionText} helperText={helperText} />
		</ReferenceInput>
	);
};
export default ReferenceSelectInput;
