import Component from "./Component";
import React from "react";
import { TopToolbar } from "react-admin";

/**
 * Provide access to top right actions for create/edit form.
 *
 * @param {Object} props
 * @param {Array} props.buttons List of buttons to display.
 * @param {Object} props.components Map of button components.
 * @returns {JSX.Element}
 */
const FormActions = ({ basePath, data, resource, buttons, components }) => {
  return (
    <TopToolbar>
      {buttons.map(({ component, componentProps }, index) => (
        <Component
          key={index}
          component={component}
          componentProps={{
            basePath,
            record: data,
            data,
            resource,
            ...componentProps,
          }}
          components={components}
        />
      ))}
    </TopToolbar>
  );
};
export default FormActions;
