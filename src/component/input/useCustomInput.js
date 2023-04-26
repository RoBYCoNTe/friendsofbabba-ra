import React, { useMemo } from 'react';

import clsx from 'clsx';
import {
  FieldTitle,
  InputHelperText,
  sanitizeInputRestProps,
  useInput,
} from 'react-admin';

const useCustomInput = ({
	className,
	defaultValue,
	format,
	label,
	name,
	source,
	resource,
	helperText,
	margin,
	onBlur,
	onChange,
	parse,
	validate,
	variant,
	...rest
}) => {
	const { field, fieldState, formState, id, isRequired } = useInput({
		defaultValue,
		name,
		format,
		parse,
		onBlur,
		onChange,
		resource,
		source,
		validate,
		...rest
	});

	const { error, invalid, isTouched } = fieldState;
	const { isSubmitted } = formState;

	return useMemo(
		() => ({
			id,
			field,
			fieldProps: {
				label: (
					<FieldTitle
						label={label}
						source={source}
						resource={resource}
						isRequired={isRequired}
					/>
				),
				helperText: (
					<InputHelperText
						touched={isTouched || isSubmitted}
						error={error?.message}
						helperText={helperText}
					/>
				),
				size: 'small',
				variant,
				margin,
				error: (isTouched || isSubmitted) && invalid,
				className: clsx('ra-input', `ra-input-${source}`, className),
				format,
				parse,
				...sanitizeInputRestProps(rest)
			}
		}),
		[
			className,
			error,
			helperText,
			invalid,
			isRequired,
			isSubmitted,
			isTouched,
			label,
			margin,
			resource,
			rest,
			source,
			variant,
			field,
			id,
			format,
			parse
		]
	);
};

export default useCustomInput;
