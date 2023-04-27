import React, {
  useCallback,
  useMemo,
} from 'react';

import * as dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import PropTypes from 'prop-types';
import {
  sanitizeInputRestProps,
  TextInput,
} from 'react-admin';

import { AccessTime } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import {
  MobileTimePicker,
  TimePicker,
} from '@mui/x-date-pickers';

import BasePickerInput from './BasePickerInput';
import useCustomInput from './useCustomInput';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @doc https://mui.com/x/api/date-pickers/time-picker/
 */
const TimePickerInput = ({ mode, pmInClock, ...props }) => {
	const { id, field, fieldProps } = useCustomInput({
		...props,
		InputLabelProps: {
			shrink: true
		}
	});
	const { onChange } = field;
	const { components, source, label, ...rest } = props;
	const PickerComponent = mode === 'dialog' ? MobileTimePicker : TimePicker;
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
			<PickerComponent
				id={id}
				{...field}
				pmInClock={pmInClock}
				value={parsedValue}
				onChange={handleChange}
				slotProps={{
					textField: {
						...fieldProps,
						InputProps: {
							endAdornment: (
								<InputAdornment position="end">
									<AccessTime />
								</InputAdornment>
							)
						}
					}
				}}
				{...sanitizeInputRestProps(rest)}
			/>
		</BasePickerInput>
	);
};

TimePickerInput.defaultProps = {
	ampmInClock: true,
	views: ['hours', 'minutes'],
	mode: 'dialog'
};

TimePickerInput.propTypes = {
	...TimePicker.propTypes,
	...TextInput.propTypes,
	mode: PropTypes.oneOf(['text', 'dialog', 'responsive'])
};

export default TimePickerInput;
