import React, {
  useCallback,
  useMemo,
} from 'react';

import { DateTime } from 'luxon';
import {
  sanitizeInputRestProps,
  TextInput,
} from 'react-admin';

import { DatePicker } from '@mui/x-date-pickers';

import BasePickerInput from './BasePickerInput';
import useCustomInput from './useCustomInput';

/**
 * @doc https://mui.com/x/api/date-pickers/date-picker/
 */
const DatePickerInput = (props) => {
	const { id, field, fieldProps } = useCustomInput({
		...props,
		InputLabelProps: {
			shrink: true
		}
	});
	const { components, ...rest } = props;
	const parsedValue = useMemo(
		() =>
			DateTime.fromISO(field.value).invalid === null
				? DateTime.fromISO(field.value)
				: null,
		[field.value]
	);

	const handleChange = useCallback(
		(_date) => {
			const date = new DateTime(_date);
			field.onChange(date.toISODate());
		},
		[field]
	);

	return (
		<BasePickerInput>
			<DatePicker
				id={id}
				{...field}
				value={parsedValue}
				onChange={handleChange}
				slotProps={{
					textField: fieldProps,
					...sanitizeInputRestProps(props)
				}}
				{...sanitizeInputRestProps(rest)}
			/>
		</BasePickerInput>
	);
};

DatePickerInput.propTypes = {
	...DatePicker.propTypes,
	...TextInput.propTypes
};

export default DatePickerInput;
