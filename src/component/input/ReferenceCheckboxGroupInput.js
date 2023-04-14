import React from 'react';

import {
  CheckboxGroupInput,
  ReferenceArrayInput,
} from 'react-admin';

import { useTheme } from '@mui/material';

import {
  createManyFormatter,
  createManyParser,
} from '../../data';

const ReferenceCheckboxGroupInput = ({
	optionText,
	parse = createManyParser(),
	format = createManyFormatter(),
	...props
}) => {
	const theme = useTheme();
	return (
		<ReferenceArrayInput {...props} parse={parse} format={format}>
			<CheckboxGroupInput
				sx={{
					"& legend": {
						marginBottom: theme.spacing(1),
					},
				}}
				optionText={optionText}
			/>
		</ReferenceArrayInput>
	);
};
export default ReferenceCheckboxGroupInput;
