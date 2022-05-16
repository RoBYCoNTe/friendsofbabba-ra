import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { useFormGroup, useTranslate } from "ra-core";

import MuiTab from "@material-ui/core/Tab";
import classnames from "classnames";
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
  const { submitFailed } = useFormState(UseFormStateOptions);
  const formGroup = useFormGroup(value.toString());
  const propsForLink = {
    component: Link,
    to: { ...location, pathname: value },
  };

  console.info(value.toString(), formGroup);
  return (
    <MuiTab
      label={isValidElement(label) ? label : translate(label, { _: label })}
      value={value}
      icon={icon}
      className={classnames("form-tab", className, {
        [classes.errorTabButton]:
          formGroup.invalid && (formGroup.touched || submitFailed),
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
  },
};

export default FormTabHeader;
