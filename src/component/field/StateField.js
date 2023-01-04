import React, { useContext, useMemo } from "react";

import { Chip } from "@material-ui/core";
import LongTextField from "./LongTextField";
import { WorkflowContext } from "data/workflow/WorkflowContext";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    padding: theme.spacing(1),
    height: "100%",
  },
}));

const StateField = ({
  label = "app.label.workflow.state",
  record,
  resource: toResolve,
  ...props
}) => {
  const classes = useStyles();
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
    <Chip
      className={classes.chip}
      color="primary"
      label={
        <LongTextField
          variant="body2"
          maxWidth={200}
          record={state}
          source="name"
        />
      }
    />
  );
};
export default StateField;
