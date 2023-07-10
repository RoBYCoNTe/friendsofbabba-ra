import React from 'react';

import {
  CheckboxGroupInput,
  ReferenceArrayInput,
} from 'react-admin';

import createManyFormatter from '../../data/cakephp/createManyFormatter';
import createManyParser from '../../data/cakephp/createManyParser';

const ReferenceCheckboxGroupInput = ({
	optionText,
	parse = createManyParser(),
	format = createManyFormatter(),
	isRequired = false,
	...props
}) => {
	return (
		<ReferenceArrayInput {...props}>
			<CheckboxGroupInput
				optionText={optionText}
				parse={parse}
				format={format}
				isRequired={isRequired}
			/>
		</ReferenceArrayInput>
	);
};
export default ReferenceCheckboxGroupInput;
