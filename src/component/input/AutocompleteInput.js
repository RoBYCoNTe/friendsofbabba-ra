import {
  FieldTitle,
  InputHelperText,
  useInput,
  useTranslate,
} from "react-admin";
import React, { useCallback, useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import Autocomplete from "./Autocomplete";
import { get } from "lodash";
import useDebouncedCallback from "util/useDebouncedCallback";
import useFieldLabel from "component/field/useFieldLabel";
import { useFormState } from "react-final-form";

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
  const selectedValue = useMemo(() => {
    const filteredData = choices?.filter(
      (c) => formState?.values?.[props?.source] === get(c, optionValue)
    );
    return filteredData?.length > 0 ? filteredData[0] : null;
  }, [formState, props?.source, choices]);
  const handleChange = useCallback((_, values) => {
    const id = get(values, optionValue);
    onChange(id);
  });

  const handleOptionLabel = useCallback(
    (option) => {
      return typeof optionText === "function"
        ? optionText(option)
        : get(option, optionText);
    },
    [optionText]
  );
  const { label, help } = useMemo(() => {
    const label = getFieldLabel(props?.source);
    const help = translate(helperText, { _: helperText });
    return { label, help };
  }, [props?.source, helperText]);
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
          onChange={handleTextChange}
          helperText={
            <InputHelperText
              helperText={help}
              touched={touched}
              error={submitError}
            />
          }
          required={isRequired}
          label={<FieldTitle label={label} isRequired={isRequired} />}
          variant={"filled"}
          {...params}
        />
      )}
    />
  );
};

export default AutocompleteInput;
