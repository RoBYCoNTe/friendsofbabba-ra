import { FieldTitle, InputHelperText, useInput } from "react-admin";
import React, { useCallback, useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import Autocomplete from "./Autocomplete";
import { get } from "lodash";
import useDebouncedCallback from "util/useDebouncedCallback";
import { useFormState } from "react-final-form";

const defaultParse = (value) => value;
const defaultFormat = (value) => value;
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));
const AutocompleteInput = ({
  choices,
  optionText = "name",
  optionValue = "id",
  helperText = null,
  className,
  setFilter,
  disabled,
  variant = "filled",
  margin = "dense",
  parse = defaultParse,
  format = defaultFormat,
  ...props
}) => {
  const formState = useFormState({ subscription: { values: true } });
  const classes = useStyles();
  const {
    input: { name, onChange, ...rest },
    meta: { touched, error, submitError, submitFailed },
    isRequired,
  } = useInput(props);
  const hasError = (error || submitError) && (touched || submitFailed);
  const selectedValue = useMemo(() => {
    const filteredData = choices?.filter(
      (c) => get(formState?.values, props?.source) === get(c, optionValue)
    );
    return format(filteredData?.length > 0 ? filteredData[0] : null);
  }, [formState, props?.source, choices]);
  const handleChange = useCallback((_, values) => {
    const id = get(values, optionValue);
    onChange(parse(id));
  });

  const handleOptionLabel = useCallback(
    (option) => {
      return typeof optionText === "function"
        ? optionText(option)
        : get(option, optionText);
    },
    [optionText]
  );

  const handleTextChange = useDebouncedCallback(
    (e) => setFilter(e.target.value),
    1000
  );
  return (
    <Autocomplete
      {...rest}
      classes={classes}
      options={choices}
      onChange={handleChange}
      disabled={disabled}
      getOptionLabel={handleOptionLabel}
      value={selectedValue}
      renderInput={(params) => (
        <TextField
          error={hasError}
          margin={margin}
          variant={variant}
          onChange={handleTextChange}
          helperText={
            <InputHelperText
              helperText={helperText || ""}
              touched={touched}
              error={submitError}
            />
          }
          required={isRequired}
          label={
            <FieldTitle
              label={props?.label}
              source={props?.source}
              resource={props?.resource}
            />
          }
          {...params}
        />
      )}
    />
  );
};

export default AutocompleteInput;
