import React, { useMemo } from 'react';

import { useListContext } from 'react-admin';

import DatePickerInput from './DatePickerInput';
import DateRangeSelectInput from './DateRangeSelectInput';

const DateRangeInput = ({
	defaultValue,
	startAtSource = "start_at",
	endAtSource = "end_at",
	daySource = "day",
	...props
}) => {
	const { filterValues } = useListContext(props);
	const viewMode = useMemo(
		() => filterValues?.[props.source],
		[filterValues, props.source]
	);

	return (
		<>
			<DateRangeSelectInput
				{...props}
				label={props.label || "app.date_range.label"}
				sx={(theme) =>
					["range", "day"].indexOf(viewMode) > -1 && {
						marginRight: theme.spacing(1),
					}
				}
			/>
			{viewMode === "range" && (
				<DatePickerInput
					{...props}
					sx={(theme) => ({
						marginRight: theme.spacing(1),
					})}
					label="app.label.start_at"
					source={startAtSource}
					alwaysOn
					fullWidth
				/>
			)}
			{viewMode === "range" && (
				<DatePickerInput
					{...props}
					sx={(theme) => ({
						marginRight: theme.spacing(1),
					})}
					label="app.label.end_at"
					source={endAtSource}
					fullWidth
				/>
			)}
			{viewMode === "day" && (
				<DatePickerInput
					{...props}
					sx={(theme) => ({
						marginRight: theme.spacing(1),
					})}
					label="app.label.day"
					source={daySource}
					alwaysOn
				/>
			)}
		</>
	);
};

export default DateRangeInput;
