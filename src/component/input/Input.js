import React, { useMemo } from "react";

import { get } from "lodash";
import useWorkflowInput from "../../data/workflow/useWorkflowInput";

const Input = ({ component, disabled, ...props }) => {
  const { resource, source, record } = useMemo(() => {
    const resource = get(props, "resource", component.props.resource);
    const source = get(props, "source", component.props.source);
    const record = get(props, "record", component.props.record);
    return { resource, source, record };
  }, [props, component]);

  const { visible, disable } = useWorkflowInput({
    ...props,
    resource,
    source,
    record,
  });

  if (!visible) {
    return null;
  }
  return React.cloneElement(component, {
    ...component.props,
    ...props,
    disabled: disable,
    resource,
    source,
    record,
  });
};
export default Input;
