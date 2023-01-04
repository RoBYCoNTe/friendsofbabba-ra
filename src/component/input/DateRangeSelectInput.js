import { SelectInput, useTranslate } from "react-admin";

import React from "react";
import { get } from "lodash";
import moment from "moment";

const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_RANGE_EXPR = {
  all: () => ({
    start_at: null,
    end_at: null,
    day: null,
  }),
  today: () => ({
    start_at: moment().format(DATE_FORMAT),
    end_at: moment().format(DATE_FORMAT),
    day: undefined,
  }),
  yesterday: () => ({
    start_at: moment().subtract(1, "days").format(DATE_FORMAT),
    end_at: moment().subtract(1, "days").format(DATE_FORMAT),
    day: undefined,
  }),
  last_7_days: () => ({
    start_at: moment().subtract(7, "days").format(DATE_FORMAT),
    end_at: moment().format(DATE_FORMAT),
    day: undefined,
  }),
  last_30_days: () => ({
    start_at: moment().subtract(30, "days").format(DATE_FORMAT),
    end_at: moment().format(DATE_FORMAT),
    day: undefined,
  }),
  prev_week: () => ({
    start_at: moment()
      .subtract(1, "weeks")
      .startOf("isoWeek")
      .format(DATE_FORMAT),
    end_at: moment().subtract(1, "weeks").endOf("isoWeek").format(DATE_FORMAT),
    day: undefined,
  }),
  this_month: () => ({
    name: (props, translate) =>
      translate(`app.date_range.this_month`, {
        month: moment().format("MMMM"),
      }),
    start_at: moment().startOf("month").format(DATE_FORMAT),
    end_at: moment().endOf("month").format(DATE_FORMAT),
    day: undefined,
  }),
  last_month: () => ({
    name: (props, translate) =>
      translate(`app.date_range.last_month`, {
        month: moment().subtract(1, "months").format("MMMM"),
      }),
    start_at: moment()
      .subtract(1, "months")
      .startOf("month")
      .format(DATE_FORMAT),
    end_at: moment().subtract(1, "months").endOf("month").format(DATE_FORMAT),
    day: undefined,
  }),
  last_two_months: () => ({
    name: (props, translate) =>
      translate(`app.date_range.last_two_months`, {
        from: moment().subtract(1, "months").format("MMMM"),
        to: moment().format("MMMM"),
      }),
    start_at: moment()
      .subtract(1, "months")
      .startOf("month")
      .format(DATE_FORMAT),
    end_at: moment().endOf("month").format(DATE_FORMAT),
    day: undefined,
  }),
  range: () => ({
    start_at: moment().startOf("month").format(DATE_FORMAT),
    end_at: moment().endOf("month").format(DATE_FORMAT),
    day: undefined,
  }),
  day: () => ({
    start_at: null,
    end_at: null,
    day: moment().format(DATE_FORMAT),
  }),
};
const getRanges = (props, translate) =>
  Object.keys(DATE_RANGE_EXPR).map((id) => {
    const nameResolver = (props, translate) =>
      translate(`app.date_range.${id}`);
    const expr = get(DATE_RANGE_EXPR, `${id}`, () => ({
      name: nameResolver,
    }))();
    const name = get(expr, "name", nameResolver)(props, translate);
    return {
      id,
      name,
    };
  });

const DateRangeSelectInput = ({
  displayedFilters,
  filterValues,
  setFilters,
  ...props
}) => {
  const translate = useTranslate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    const range = get(DATE_RANGE_EXPR, value, get(DATE_RANGE_EXPR, "today"))();

    const newFilters = {
      ...filterValues,
      [props.source]: value,
      ...range,
    };
    setFilters(newFilters, displayedFilters);
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
