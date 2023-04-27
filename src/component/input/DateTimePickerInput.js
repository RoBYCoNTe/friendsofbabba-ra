import React, {
  useCallback,
  useMemo,
} from 'react';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {
  sanitizeInputRestProps,
  TextInput,
} from 'react-admin';

import { DateTimePicker } from '@mui/x-date-pickers';

import BasePickerInput from './BasePickerInput';
import useCustomInput from './useCustomInput';

dayjs.extend(utc);
dayjs.extend(timezone);

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
	const { onChange } = field;
	const { components, ...rest } = props;
	const parsedValue = useMemo(() => {
		const _date = dayjs(field.value);
		return _date.isValid() ? _date : null;
	}, [field.value]);

	const handleChange = useCallback(
		(_date) => {
			const date = dayjs(_date);
			onChange(date.tz().format());
		},
		[onChange]
	);

	return (
		<BasePickerInput>
			<DateTimePicker
				id={id}
				{...field}
				ampm={false}
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
