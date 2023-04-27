import React from 'react';

import PropTypes from 'prop-types';
import {
  AutocompleteInput,
  ReferenceInput,
} from 'react-admin';

import CreateSuggestionInput from './CreateSuggestionInput';

const ReferenceAutocompleteInput = ({
	optionText,
	optionValue,
	helperText,
	fullWidth,
	sx = {},
	create,
	createResource,
	createSource,
	...props
}) => {
	return (
		<>
			<ReferenceInput {...props}>
				<AutocompleteInput
					optionText={(r) => {
						console.log('Record:', r);
						return r?.[optionText];
					}}
					optionValue={optionValue}
					helperText={helperText}
					size="small"
					fullWidth={fullWidth}
					sx={sx}
					create={
						create && (
							<CreateSuggestionInput
								resource={props?.reference}
								source={optionText}
							/>
						)
					}
				/>
			</ReferenceInput>
		</>
	);
};

ReferenceAutocompleteInput.propTypes = {
	...ReferenceInput.propTypes,
	create: PropTypes.bool
};

export default ReferenceAutocompleteInput;
