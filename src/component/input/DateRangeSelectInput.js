import React from 'react';

import { DateTime } from 'luxon';
import {
  SelectInput,
  useListContext,
  useTranslate,
} from 'react-admin';
import { useFormContext } from 'react-hook-form';

export const DATE_RANGE_EXPR = {
	all: () => ({
		start_at: null,
		end_at: null,
		day: null,
	}),
	today: () => ({
		start_at: null,
		end_at: null,
		day: DateTime.local().toISODate(),
	}),
	yesterday: () => ({
		start_at: null,
		end_at: null,
		day: DateTime.local().minus({ days: 1 }).toISODate(),
	}),
	last_7_days: () => ({
		start_at: DateTime.local().minus({ days: 7 }).toISODate(),
		end_at: DateTime.local().toISODate(),
		day: null,
	}),
	last_30_days: () => ({
		start_at: DateTime.local().minus({ days: 30 }).toISODate(),
		end_at: DateTime.local().toISODate(),
		day: null,
	}),
	prev_week: () => ({
		start_at: DateTime.local().minus({ weeks: 1 }).startOf("week").toISODate(),
		end_at: DateTime.local().minus({ weeks: 1 }).endOf("week").toISODate(),
		day: null,
	}),
	this_month: () => ({
		name: (props, translate) =>
			translate(`app.date_range.this_month`, {
				month: DateTime.local().toFormat("MMMM"),
			}),
		start_at: DateTime.local().startOf("month").toISODate(),
		end_at: DateTime.local().endOf("month").toISODate(),
		day: null,
	}),
	last_month: () => ({
		name: (props, translate) =>
			translate(`app.date_range.last_month`, {
				month: DateTime.local().minus({ months: 1 }).toFormat("MMMM"),
			}),
		start_at: DateTime.local()
			.minus({ months: 1 })
			.startOf("month")
			.toISODate(),
		end_at: DateTime.local().minus({ months: 1 }).endOf("month").toISODate(),
		day: null,
	}),
	last_two_months: () => ({
		name: (props, translate) =>
			translate(`app.date_range.last_two_months`, {
				from: DateTime.local().minus({ months: 1 }).toFormat("MMMM"),
				to: DateTime.local().toFormat("MMMM"),
			}),
		start_at: DateTime.local()
			.minus({ months: 1 })
			.startOf("month")
			.toISODate(),
		end_at: DateTime.local().endOf("month").toISODate(),
		day: null,
	}),
	range: () => ({
		start_at: DateTime.local().startOf("month").toISODate(),
		end_at: DateTime.local().endOf("month").toISODate(),
		day: null,
	}),
	day: () => ({
		start_at: null,
		end_at: null,
		day: DateTime.local().toISODate(),
	}),
};

const getRanges = (props, translate) =>
	Object.keys(DATE_RANGE_EXPR).map((id) => {
		const nameResolver = (props, translate) =>
			translate(`app.date_range.${id}`);
		const expr = DATE_RANGE_EXPR[id]?.() ?? { name: nameResolver };
		const name = expr.name
			? expr.name(props, translate)
			: nameResolver(props, translate);
		return {
			id,
			name,
		};
	});

const DateRangeSelectInput = ({ onChange, ...props }) => {
	const translate = useTranslate();
	const { setValue } = useFormContext();
	const { filterValues } = useListContext();
	const handleChange = (evt) => {
		const value = evt.target.value;
		const range = DATE_RANGE_EXPR[value]?.() ?? DATE_RANGE_EXPR.today();
		const newFilters = {
			...filterValues,
			[props.source]: value,
			...range,
		};
		Object.keys(newFilters).forEach((key) => {
			setValue(key, newFilters[key]);
		});
	};
	return (
		<SelectInput
			{...props}
			label={props.label || "app.date_range.label"}
			choices={getRanges(props, translate)}
			onChange={handleChange}
		/>
	);
};

export default DateRangeSelectInput;
