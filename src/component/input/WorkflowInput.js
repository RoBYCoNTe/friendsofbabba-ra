import React, { useContext, useMemo } from "react";

import { get } from "lodash";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { useGetIdentity } from "ra-core";

const Input = ({ component, disabled, ...props }) => {
  const { loaded, loading, identity } = useGetIdentity();
  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [identity, loading, loaded]
  );
  const { resource, source, record } = useMemo(() => {
    const resource = get(props, "resource", component.props.resource);
    const source = get(props, "source", component.props.source);
    const record = get(props, "record", component.props.record);
    return { resource, source, record };
  }, [props, component]);

  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(resource),
    [resource, getWorkflow]
  );

  const { visible, disable } = useMemo(() => {
    const visible = workflow && workflow.canReadField(source, roles, record);
    const disable =
      disabled || (workflow && !workflow.canEditField(source, roles, record));
    return { visible, disable };
  }, [workflow, source, record, roles, disabled]);

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
