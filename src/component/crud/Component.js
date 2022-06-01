import { Labeled } from "react-admin";
import React from "react";
import { Typography } from "@material-ui/core";
import { get } from "lodash";

const Component = ({
  component,
  componentProps,
  components,
  addLabel = true,
  sortBy,
  ...props
}) => {
  const Component = get(components, component);
  if (!Component) {
    return addLabel ? (
      <Labeled label={props.label} source={props.source} fullWidth>
        <Typography variant="body2">
          No component found for <code>{component}</code>.
        </Typography>
      </Labeled>
    ) : (
      <Typography variant="body2">
        No component found for <code>{component}</code>.
      </Typography>
    );
  }
  return <Component {...props} {...componentProps} />;
};

export default Component;
