import React, { useContext, useMemo } from "react";

import Alert from "../Alert";
import AlertTitle from "../AlertTitle";
import { Typography } from "@material-ui/core";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
  },
}));

/**
 * Allow to display the state of a workflow based on the current record.
 * This field display the 'name' and 'description' of current state inside an alert.
 *
 * You can customize few options, if you want to use just the informations
 * necessary to work with the workflow, you can use the 'WorkflowContext' (inside a form)
 * like in the example shown below.
 *
 * @example
 * import { useWorkflow, WorkflowContext } from "ra-friendsofbabba";
 * const { getWorkflow } = useContext(WorkflowContext);
 * const workflow = useMemo(() => getWorkflow(resource), [resource, getWorkflow] );
 * const state = useMemo(() => (workflow && workflow.getState(record)) || undefined, [record, workflow]);
 *
 * // The state object contains many properties like: name,
 * // label and description that you can use
 * // for your own purpose.
 *
 * @param {Object} props
 * @param {String} props.resource The resource for which load the workflow.
 * @param {String} props.severity Severity of the associated allert.
 * @param {String} props.variant Variant of the associated allert.
 * @param {Number} props.elevation Elevation of the associated allert.
 * @param {Object} props.record The record for which display the state.
 * @returns {React.Component}
 */
const StateInfoField = ({
  resource,
  severity = "info",
  variant = "standard",
  elevation = 0,
  record,
}) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const classes = useStyles();
  const workflow = useMemo(
    () => getWorkflow(resource),
    [resource, getWorkflow]
  );
  const state = useMemo(
    () => (workflow && workflow.getState(record)) || undefined,
    [record, workflow]
  );
  return (
    <Alert severity={severity} variant={variant} elevation={elevation}>
      <AlertTitle classes={classes}>{state?.name}</AlertTitle>
      <Typography variant="body2">{state?.description}</Typography>
    </Alert>
  );
};
export default StateInfoField;
