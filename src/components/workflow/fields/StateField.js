import { ChipField } from "react-admin";
import React, { useContext, useMemo } from "react";

import { get } from "lodash";
import { WorkflowContext } from "../../../data/workflow/WorkflowContext";

const StateField = ({
  label = "app.label.workflow.state",
  record,
  resource: toResolve,
  ...props
}) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const resource = useMemo(
    () => toResolve.replace("workflow/transactions/", ""),
    [toResolve]
  );

  const workflow = useMemo(
    () => getWorkflow(resource),
    [resource, getWorkflow]
  );
  const state = useMemo(
    () =>
      (workflow &&
        workflow.getState({
          ...record,
          transaction: get(record, "transaction", record),
        })) ||
      undefined,
    [record, workflow]
  );

  return (
    <ChipField
      {...props}
      label={label}
      source="name"
      record={state}
      color="primary"
    />
  );
};
export default StateField;
