import {
  FieldTitle,
  maxLength as maxLengthValidator,
  useTranslate,
} from "ra-core";
import React, { useCallback, useEffect, useRef } from "react";

import { InputHelperText } from "ra-ui-materialui";
import TextField from "@material-ui/core/TextField";
import { get } from "lodash";
import useDebounce from "../../utils/useDebounce";
import { useFormState } from "react-final-form";
import { useInput } from "react-admin";

const DebouncedTextInput = ({
  margin = "dense",
  variant = "filled",
  fullWidth,
  maxLength,
  multiline,
  format,
  rows,
  disabled,
  InputLabelProps,
  ...props
}) => {
  const { className, source, resource, label } = props;
  const validationFn = maxLengthValidator(maxLength);
  let helperText = props.helperText;
  let validate = props.validate;
  if (!validate) {
    validate = [validationFn];
  } else if (Array.isArray(validate)) {
    if (validate.indexOf(validationFn) === -1) {
      validate.push(validationFn);
    }
  }
  const {
    input: { name, onChange, ...rest },
    meta: { touched, error, submitError },
    isRequired,
  } = useInput({ validate, ...props });
  const translate = useTranslate();
  const defaultValue = props.type === "number" ? 0 : "";
  const [value, setValue] = React.useState(
    rest.value !== undefined ? rest.value : defaultValue
  );
  const formState = useFormState();
  const formValue = get(formState.values, source, defaultValue);
  const didMountEffect = useRef(false);
  useEffect(() => {
    if (didMountEffect.current === false) {
      didMountEffect.current = true;
      return;
    }
    if (formValue && formValue !== null) {
      setValue(formValue);
    }
  }, [formValue]);
  const handleChange = useCallback((evt) => setValue(evt.target.value), []);
  const debouncedValue = useDebounce(value, 500);
  const didMountChange = useRef(false);

  useEffect(() => {
    if (didMountChange.current === false) {
      didMountChange.current = true;
      return;
    }
    if (
      debouncedValue !== (formValue !== null ? formValue : defaultValue) &&
      debouncedValue !== defaultValue
    ) {
      onChange(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, onChange]);
  const usedCharsInfo = translate("app.input.max_length_info", {
    count: get(value, "length", 0),
    max: maxLength,
  });
  if (maxLength) {
    helperText =
      helperText && helperText.length > 0
        ? `${usedCharsInfo} - ${translate(helperText)}`
        : usedCharsInfo;
  }

  return (
    <TextField
      {...rest}
      disabled={disabled}
      name={name}
      className={className}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      variant={variant}
      margin={margin}
      value={format ? format(value) : value}
      label={
        label !== "" &&
        label !== false && (
          <FieldTitle
            label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />
        )
      }
      onChange={handleChange}
      error={!!(touched && (error || submitError))}
      helperText={
        <InputHelperText
          touched={touched}
          error={error || submitError}
          helperText={helperText}
        />
      }
      InputLabelProps={InputLabelProps}
      required={isRequired}
    />
  );
};
export default DebouncedTextInput;