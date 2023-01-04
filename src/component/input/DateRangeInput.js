import { DateInput, useListContext } from "react-admin";
import { Fragment, useMemo } from "react";

import DateRangeSelectInput from "./DateRangeSelectInput";
import React from "react";
import classNames from "classnames";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginRight: theme.spacing(1),
  },
}));

const DateRangeInput = ({
  startAtSource = "start_at",
  endAtSource = "end_at",
  daySource = "day",
  ...props
}) => {
  const classes = useStyles();
  const { displayedFilters, filterValues, setFilters } = useListContext(props);
  const viewMode = useMemo(
    () => get(filterValues, props.source),
    [filterValues, props.source]
  );
  return (
    <Fragment>
      <DateRangeSelectInput
        {...props}
        label={props.label || "app.date_range.label"}
        displayedFilters={displayedFilters}
        filterValues={filterValues}
        setFilters={setFilters}
        className={classNames(
          ["range", "day"].indexOf(viewMode) > -1 && classes.input
        )}
      />
      {viewMode === "range" && (
        <DateInput
          {...props}
          className={classes.input}
          label="app.label.start_at"
          source={startAtSource}
          alwaysOn
          fullWidth
        />
      )}
      {viewMode === "range" && (
        <DateInput
          {...props}
          className={classes.input}
          label="app.label.end_at"
          source={endAtSource}
          fullWidth
        />
      )}
      {viewMode === "day" && (
        <DateInput
          {...props}
          className={classes.input}
          label="app.label.day"
          source={daySource}
          alwaysOn
        />
      )}
    </Fragment>
  );
};

export default DateRangeInput;
