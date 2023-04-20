import React from 'react';

import {
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';

const ReferenceAutocompleteInput = ({
	optionText,
	optionValue,
	helperText,
	fullWidth,
	...props
}) => (
	<ReferenceInput {...props}>
		<AutocompleteInput
			optionText={optionText}
			optionValue={optionValue}
			helperText={helperText}
			size="small"
			fullWidth={fullWidth}
		/>
	</ReferenceInput>
);
export default ReferenceAutocompleteInput;
