import React from 'react';

import {
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';

const ReferenceAutocompleteInput = ({
	optionText,
	optionValue,
	helperText,
	...props
}) => (
	<ReferenceInput {...props}>
		<AutocompleteInput
			optionText={optionText}
			optionValue={optionValue}
			helperText={helperText}
		/>
	</ReferenceInput>
);
export default ReferenceAutocompleteInput;
