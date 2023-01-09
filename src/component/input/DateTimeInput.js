import { FieldTitle, useInput, useTranslate } from "react-admin";
import React, { Fragment, useCallback, useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import { get } from "lodash";

const useStyles = makeStyles((theme) => ({
  leftInput: {
    "& .MuiInputBase-root": {
      borderTopRightRadius: 0,
    },
    "& label": {
      overflow: "visible",
      minWidth: 250,
      transform: `translate(12px, 10px) scale(0.75)`,
    },
    marginBottom: theme.spacing(1),
  },
  rightInput: {
    "& .MuiInputBase-root": {
      borderTopLeftRadius: 0,
    },
    marginBottom: theme.spacing(1),
  },
}));
const getDateAndTime = (value) => {
  const dateAndTime =
    value.indexOf("T") !== -1 ? value.split("T") : value.split(" ");
  const date = get(dateAndTime, "[0]", "");
  const time = get(dateAndTime, "[1]", "").substr(0, 5);
  return { date, time };
};
const DateTimeInput = (props) => {
  const classes = useStyles();
  const {
    input: { name, onChange, value, ...rest },
    meta: { touched, error, submitError },
    isRequired,
  } = useInput(props);
  const { date, time } = useMemo(() => getDateAndTime(value), [value]);
  const stopTimeChange = !value || value === null;
  const handleChange = useCallback(
    (part) => (e) => {
      let { date, time } = getDateAndTime(value);
      switch (part) {
        case "date":
          date = e.target.value;
          break;
        case "time":
          time = e.target.value;
          break;
        default:
          break;
      }
      let dateAndTime = [date, time].join(" ");
      onChange(dateAndTime);
    },
    [value, onChange]
  );
  const label = props.label || props.source;
  const translate = useTranslate();
  return (
    <Fragment>
      <TextField
        label={<FieldTitle label={label} isRequired={isRequired} />}
        variant="filled"
        type="date"
        error={!!(touched && (error || submitError))}
        helperText={
          touched &&
          ((error && translate(error)) ||
            (submitError && translate(submitError)))
        }
        required={isRequired}
        classes={{ root: classes.leftInput }}
        value={date}
        onChange={handleChange("date")}
        {...rest}
      />
      <TextField
        variant="filled"
        type="time"
        error={!!(touched && (error || submitError))}
        required={isRequired}
        classes={{ root: classes.rightInput }}
        value={time}
        onChange={stopTimeChange ? null : handleChange("time")}
        {...rest}
      />
    </Fragment>
  );
};

export default DateTimeInput;
