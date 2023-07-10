import React from 'react';

import {
  AutocompleteArrayInput,
  ReferenceArrayInput,
  useResourceContext,
} from 'react-admin';

import useManyFormatter from '../../data/cakephp/useManyFormatter';
import useManyParser from '../../data/cakephp/useManyParser';

const ReferenceAutocompleteArrayInput = ({
	optionText,
	optionValue,
	helperText,
	isRequired = false,
	...props
}) => {
	const resource = useResourceContext(props);
	const manyFormatter = useManyFormatter();
	const manyParser = useManyParser();
	return (
		<ReferenceArrayInput {...props} fullWidth>
			<AutocompleteArrayInput
				optionText={optionText}
				optionValue={optionValue}
				helperText={helperText}
				resource={resource}
				size="small"
				format={manyFormatter}
				parse={manyParser}
				isRequired={isRequired}
			/>
		</ReferenceArrayInput>
	);
};
export default ReferenceAutocompleteArrayInput;
