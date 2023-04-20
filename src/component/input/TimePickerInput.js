import React, {
  useCallback,
  useMemo,
} from 'react';

import { DateTime } from 'luxon';
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

/**
 * @doc https://mui.com/x/api/date-pickers/time-picker/
 */
const TimePickerInput = ({ mode, ...props }) => {
	const { id, field, fieldProps } = useCustomInput(props);
	const { components, source, label, ...rest } = props;
	const PickerComponent = mode === "dialog" ? MobileTimePicker : TimePicker;
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
			<PickerComponent
				id={id}
				{...field}
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
							),
						},
					},
				}}
				{...sanitizeInputRestProps(rest)}
			/>
		</BasePickerInput>
	);
};

TimePickerInput.defaultProps = {
	ampmInClock: true,
	views: ["hours", "minutes"],
	mode: "dialog",
};

TimePickerInput.propTypes = {
	...TimePicker.propTypes,
	...TextInput.propTypes,
	mode: PropTypes.oneOf(["text", "dialog", "responsive"]),
};

export default TimePickerInput;
