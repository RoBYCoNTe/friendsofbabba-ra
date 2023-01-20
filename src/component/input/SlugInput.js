import { IconButton, InputAdornment } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useForm, useFormState } from "react-final-form";

import DebouncedTextInput from "./DebouncedTextInput";
import RefreshIcon from "@material-ui/icons/Refresh";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const validate = (value) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    return "ra.validation.slug";
  }
  return undefined;
};
const SlugInput = ({ dependency, ...props }) => {
  const form = useForm();
  const { values } = useFormState({ subscription: { values: true } });
  useEffect(() => {
    if (dependency && values[dependency] && !values[props.source]) {
      form.change(props.source, slugify(values[dependency]));
    }
  }, [dependency, form, props.source, values]);
  const handleSlugify = useCallback(() => {
    if (values[dependency]) {
      form.change(props.source, slugify(values[dependency]));
    }
  }, [dependency, form, props.source, values]);
  return (
    <DebouncedTextInput
      {...props}
      validate={validate}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`generate slug from ${dependency}`}
              onClick={handleSlugify}
              onMouseDown={handleSlugify}
            >
              <RefreshIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SlugInput;
