import React, {
  useCallback,
  useMemo,
} from 'react';

import * as dayjs from 'dayjs';
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
	const { onChange } = field;
	const { components, ...rest } = props;
	const parsedValue = useMemo(() => {
		const _date = dayjs(field.value);
		return _date.isValid() ? _date : null;
	}, [field.value]);

	const handleChange = useCallback(
		(_date) => {
			const date = dayjs(_date);
			onChange(date.format('YYYY-MM-DD'));
		},
		[onChange]
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
