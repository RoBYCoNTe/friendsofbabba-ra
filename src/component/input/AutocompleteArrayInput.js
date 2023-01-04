import {
  FieldTitle,
  InputHelperText,
  useInput,
  useTranslate,
} from "react-admin";
import React, { useCallback, useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import Autocomplete from "./Autocomplete";
import createManyFormatter from "data/cakephp/createManyFormatter";
import createManyParser from "data/cakephp/createManyParser";
import { get } from "lodash";
import useDebouncedCallback from "util/useDebouncedCallback";
import useFieldLabel from "component/field/useFieldLabel";
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
  ...props
}) => {
  const formState = useFormState({ subscription: { values: true } });
  const translate = useTranslate();
  const getFieldLabel = useFieldLabel(props);
  const classes = useStyles();
  const {
    input: { name, onChange, ...rest },
    meta: { touched, error, submitError, submitFailed },
    isRequired,
  } = useInput(props);
  const hasError = (error || submitError) && (touched || submitFailed);

  const selectedValues = useMemo(() => {
    const ids = format(formState?.values?.[props?.source] || []);
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
  const { label, help } = useMemo(() => {
    const label = getFieldLabel(props?.source);
    const help = translate(helperText, { _: helperText });
    return { label, help };
  }, [props?.source, helperText]);

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
          onChange={handleTextChange}
          helperText={
            <InputHelperText
              helperText={help}
              touched={touched}
              error={submitError}
            />
          }
          required={isRequired}
          label={
            <FieldTitle {...props} label={label} isRequired={isRequired} />
          }
          variant={"filled"}
          {...params}
        />
      )}
    />
  );
};

export default AutocompleteArrayInput;
