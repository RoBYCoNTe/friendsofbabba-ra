import React, { useContext, useMemo } from "react";

import { SelectArrayInput } from "react-admin";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
  },
}));
const StateArrayInput = ({ filter = undefined, ...props }) => {
  const classes = useStyles();
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
    <SelectArrayInput
      {...props}
      className={classes.root}
      choices={states}
      optionText="name"
      optionValue="code"
      allowEmpty
      emptyText="ra.action.all"
    />
  );
};
export default StateArrayInput;
