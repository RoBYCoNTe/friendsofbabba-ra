import React from 'react';

import {
  maxLength as maxLengthValidator,
  TextInput,
  useTranslate,
} from 'react-admin';
import { useController } from 'react-hook-form';

const CountableTextInput = ({ delay = 500, ...props }) => {
	const translate = useTranslate();
	const validationFn = maxLengthValidator(
		props?.maxLength,
		"app.input.max_length_error"
	);
	const value = useController({ name: props?.source })?.field?.value;

	let helperText = props.helperText;
	let validate = props.validate;

	if (!validate) {
		validate = [validationFn];
	} else if (Array.isArray(validate)) {
		if (validate.indexOf(validationFn) === -1) {
			validate.push(validationFn);
		}
	}

	const usedCharsInfo = translate("app.input.max_length_info", {
		count: value?.length || 0,
		max: props?.maxLength,
	});

	if (props?.maxLength) {
		helperText =
			helperText && helperText.length > 0
				? `${usedCharsInfo} - ${translate(helperText)}`
				: usedCharsInfo;
	}

	return <TextInput {...props} validate={validate} helperText={helperText} />;
};

export default CountableTextInput;
