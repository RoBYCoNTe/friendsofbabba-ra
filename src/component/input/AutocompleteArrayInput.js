import { FieldTitle, InputHelperText, useInput } from "react-admin";
import React, { useCallback, useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import Autocomplete from "./Autocomplete";
import createManyFormatter from "data/cakephp/createManyFormatter";
import createManyParser from "data/cakephp/createManyParser";
import { get } from "lodash";
import useDebouncedCallback from "util/useDebouncedCallback";
import { useFormState } from "react-final-form";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "& div>div": {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
      },
    },
  }),
  { name: "FobAutocompleteArrayInput" }
);

const AutocompleteArrayInput = ({
  choices,
  optionText = "name",
  setFilter,
  parse = createManyParser(),
  format = createManyFormatter(),
  helperText,
  disabled,
  variant = "filled",
  margin = "dense",
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

  const selectedValues = useMemo(() => {
    const ids = format(get(formState?.values, props?.source, []));
    return choices.filter((c) => ids.indexOf(c.id) !== -1);
  }, [formState, props, choices]);

  const handleChange = useCallback((_, values) => {
    const ids = format(values);
    onChange(ids);
  }, []);

  const handleOptionLabel = useCallback(
    (option) =>
      typeof optionText === "function"
        ? optionText(option)
        : get(option, optionText),
    [optionText]
  );
  const handleTextChange = useDebouncedCallback(
    (e) => setFilter(e.target.value),
    1000
  );

  return (
    <Autocomplete
      {...rest}
      multiple
      classes={classes}
      options={choices}
      disabled={disabled}
      onChange={handleChange}
      getOptionLabel={handleOptionLabel}
      value={selectedValues}
      renderInput={(params) => (
        <TextField
          error={hasError}
          margin={margin}
          variant={variant}
          onChange={handleTextChange}
          helperText={
            <InputHelperText
              helperText={helperText}
              touched={touched}
              error={submitError}
            />
          }
          required={isRequired}
          label={
            <FieldTitle
              {...props}
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

export default AutocompleteArrayInput;
