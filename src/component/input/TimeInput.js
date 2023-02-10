import { FieldTitle, useInput } from "react-admin";

import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& label": {
      width: "90%",
      overflow: "visible",
      transform: `translate(12px, 10px) scale(0.75)`,
    },
    marginBottom: theme.spacing(1),
  },
}));
const TimeInput = ({
  variant = "filled",
  margin = "dense",
  size = "small",
  ...props
}) => {
  const classes = useStyles();
  const {
    input: { name, ...rest },
    meta: { touched, error, submitError },
    isRequired,
  } = useInput({ ...props });

  return (
    <TextField
      label={
        <FieldTitle
          label={props?.label}
          source={props?.source}
          resource={props?.resource}
        />
      }
      variant={variant}
      margin={margin}
      size={size}
      type="time"
      error={!!(touched && (error || submitError))}
      required={isRequired}
      className={props?.className}
      classes={classes}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
};

export default TimeInput;
