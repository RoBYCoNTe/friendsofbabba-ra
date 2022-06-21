import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { useFormContext, useFormGroup, useTranslate } from "ra-core";

import { Tab as MuiTab } from "@material-ui/core";
import classnames from "classnames";
import { get } from "lodash";
import { isValidElement } from "react";
import { useFormState } from "react-final-form";

const FormTabHeader = ({
  classes,
  label,
  value,
  icon,
  className,
  syncWithLocation,
  ...rest
}) => {
  const translate = useTranslate();
  const location = useLocation();
  const { submitFailed, submitErrors } = useFormState(UseFormStateOptions);
  const formContext = useFormContext();
  const formGroup = useFormGroup(value.toString());
  const submitError = React.useMemo(() => {
    const fields = formContext.getGroupFields(value.toString());
    const errors = fields.some((field) => get(submitErrors, field) != null);

    return errors;
  }, [submitErrors, formContext, value]);

  const propsForLink = {
    component: Link,
    to: { ...location, pathname: value },
  };
  return (
    <MuiTab
      label={isValidElement(label) ? label : translate(label, { _: label })}
      value={value}
      icon={icon}
      className={classnames("form-tab", className, {
        [classes.errorTabButton]:
          submitError ||
          (formGroup.invalid && (formGroup.touched || submitFailed)),
      })}
      {...(syncWithLocation ? propsForLink : {})} // to avoid TypeScript screams, see https://github.com/mui-org/material-ui/issues/9106#issuecomment-451270521
      id={`tabheader-${value}`}
      aria-controls={`tabpanel-${value}`}
      {...rest}
    />
  );
};

const UseFormStateOptions = {
  subscription: {
    submitFailed: true,
    submitErrors: true,
  },
};

export default FormTabHeader;
