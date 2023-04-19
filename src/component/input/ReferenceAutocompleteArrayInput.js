import React from "react";

// TODO: Use custom AutocompleteArrayInput
import { AutocompleteArrayInput, ReferenceArrayInput } from "react-admin";

import useManyFormatter from "../../data/cakephp/useManyFormatter";
import useManyParser from "../../data/cakephp/useManyParser";

const ReferenceAutocompleteArrayInput = ({
	optionText,
	optionValue,
	helperText,
	...props
}) => {
	const manyFormatter = useManyFormatter();
	const manyParser = useManyParser();
	return (
		<ReferenceArrayInput
			{...props}
			format={manyFormatter}
			parse={manyParser}
			fullWidth
		>
			<AutocompleteArrayInput
				optionText={optionText}
				optionValue={optionValue}
				helperText={helperText}
				resource={props.resource}
			/>
		</ReferenceArrayInput>
	);
};
export default ReferenceAutocompleteArrayInput;
