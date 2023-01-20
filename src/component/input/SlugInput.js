import { IconButton, InputAdornment } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useForm, useFormState } from "react-final-form";

import DebouncedTextInput from "./DebouncedTextInput";
import RefreshIcon from "@material-ui/icons/Refresh";
import useDebounce from "util/useDebounce";

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
  const { values, touched } = useFormState({
    subscription: { values: true, touched: true },
  });
  useEffect(() => {
    if (dependency && values[dependency] && !touched[props.source]) {
      form.change(props.source, slugify(values[dependency]));
    }
  }, [dependency, form, props.source, values[dependency], touched]);

  const handleSlugify = useCallback(() => {
    if (values[dependency]) {
      form.change(props.source, slugify(values[dependency]));
    }
  }, [dependency, form, props.source, values[dependency], touched]);
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
