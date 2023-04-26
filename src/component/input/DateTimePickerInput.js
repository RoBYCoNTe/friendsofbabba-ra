import React, {
  useCallback,
  useMemo,
} from 'react';

import { DateTime } from 'luxon';
import {
  sanitizeInputRestProps,
  TextInput,
} from 'react-admin';

import { DateTimePicker } from '@mui/x-date-pickers';

import BasePickerInput from './BasePickerInput';
import useCustomInput from './useCustomInput';

/**
 * @doc https://mui.com/x/api/date-pickers/date-time-picker/
 */
const DateTimePickerInput = (props) => {
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
			field.onChange(date.toISO());
		},
		[field]
	);

	return (
		<BasePickerInput>
			<DateTimePicker
				id={id}
				{...field}
				value={parsedValue}
				onChange={handleChange}
				slotProps={{
					textField: fieldProps
				}}
				{...sanitizeInputRestProps(rest)}
			/>
		</BasePickerInput>
	);
};

DateTimePickerInput.propTypes = {
	...DateTimePicker.propTypes,
	...TextInput.propTypes
};

export default DateTimePickerInput;
