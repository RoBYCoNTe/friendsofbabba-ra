import React, { useContext, useMemo } from "react";

import { SelectInput } from "react-admin";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";

const StateInput = ({ filter = undefined, ...props }) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(props.resource),
    [props.resource, getWorkflow]
  );

  const states = useMemo(
    () =>
      workflow
        ? workflow.states.filter(
            (s) => !s.isLoop && (filter === undefined || filter(s))
          )
        : [],
    [workflow, filter]
  );
  return (
    <SelectInput
      {...props}
      choices={states}
      optionText="name"
      optionValue="code"
    />
  );
};
export default StateInput;
