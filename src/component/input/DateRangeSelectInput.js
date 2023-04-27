import React from 'react';

import dayjs from 'dayjs';
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
		day: null
	}),
	today: () => ({
		start_at: null,
		end_at: null,
		day: dayjs().format('YYYY-MM-DD')
	}),
	yesterday: () => ({
		start_at: null,
		end_at: null,
		day: dayjs().subtract(1, 'day').format('YYYY-MM-DD')
	}),
	last_7_days: () => ({
		start_at: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
		end_at: dayjs().format('YYYY-MM-DD'),
		day: null
	}),
	last_30_days: () => ({
		start_at: dayjs().subtract(30, 'day').format('YYYY-MM-DD'),
		end_at: dayjs().format('YYYY-MM-DD'),
		day: null
	}),
	prev_week: () => ({
		start_at: dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
		end_at: dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
		day: null
	}),
	this_month: () => ({
		name: (props, translate) =>
			translate(`app.date_range.this_month`, {
				month: dayjs().format('MMMM')
			}),
		start_at: dayjs().startOf('month').format('YYYY-MM-DD'),
		end_at: dayjs().endOf('month').format('YYYY-MM-DD'),
		day: null
	}),
	last_month: () => ({
		name: (props, translate) =>
			translate(`app.date_range.last_month`, {
				month: dayjs().subtract(1, 'month').format('MMMM')
			}),
		start_at: dayjs()
			.subtract(1, 'month')
			.startOf('month')
			.format('YYYY-MM-DD'),
		end_at: dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
		day: null
	}),
	last_two_months: () => ({
		name: (props, translate) =>
			translate(`app.date_range.last_two_months`, {
				from: dayjs().subtract(1, 'month').format('MMMM'),
				to: dayjs().format('MMMM')
			}),
		start_at: dayjs()
			.subtract(1, 'month')
			.startOf('month')
			.format('YYYY-MM-DD'),
		end_at: dayjs().endOf('month').format('YYYY-MM-DD'),
		day: null
	}),
	range: () => ({
		start_at: dayjs().startOf('month').format('YYYY-MM-DD'),
		end_at: dayjs().endOf('month').format('YYYY-MM-DD'),
		day: null
	}),
	day: () => ({
		start_at: null,
		end_at: null,
		day: dayjs().format('YYYY-MM-DD')
	})
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
			name
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
			...range
		};
		Object.keys(newFilters).forEach((key) => {
			setValue(key, newFilters[key]);
		});
	};
	return (
		<SelectInput
			{...props}
			label={props.label || 'app.date_range.label'}
			choices={getRanges(props, translate)}
			onChange={handleChange}
		/>
	);
};

export default DateRangeSelectInput;
