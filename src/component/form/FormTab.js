import * as React from "react";

import { FormGroupContextProvider } from "ra-core";
import { FormInput } from "react-admin";
import FormTabHeader from "./FormTabHeader";

const hiddenStyle = { display: "none" };

const FormTab = (props) => {
  const {
    basePath,
    className,
    classes,
    contentClassName,
    children,
    hidden,
    icon,
    intent,
    label,
    margin,
    path,
    record,
    resource,
    variant,
    value,
    ...rest
  } = props;
  const renderHeader = () => (
    <FormTabHeader
      label={label}
      value={value}
      icon={icon}
      className={className}
      classes={classes}
      {...rest}
    />
  );

  const renderContent = () => (
    <FormGroupContextProvider name={value.toString()}>
      <span
        style={hidden ? hiddenStyle : null}
        className={contentClassName}
        id={`tabpanel-${value}`}
        aria-labelledby={`tabheader-${value}`}
        // Set undefined instead of false because WAI-ARIA Authoring Practices 1.1
        // notes that aria-hidden="false" currently behaves inconsistently across browsers.
        aria-hidden={hidden || undefined}
      >
        {React.Children.map(
          children,
          (input) =>
            input && (
              <FormInput
                basePath={basePath}
                input={input}
                record={record}
                resource={resource}
                variant={input.props.variant || variant}
                margin={input.props.margin || margin}
              />
            )
        )}
      </span>
    </FormGroupContextProvider>
  );

  return intent === "header" ? renderHeader() : renderContent();
};

export default FormTab;
