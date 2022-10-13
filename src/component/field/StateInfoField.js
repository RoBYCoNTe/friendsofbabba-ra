import React, { useContext, useMemo } from "react";

import Alert from "../Alert";
import AlertTitle from "../AlertTitle";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
  },
}));
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
    <Alert severity={severity} variant={variant} elevation={elevation}>
      <AlertTitle classes={classes}>{state?.name}</AlertTitle>
      <Typography variant="body2">{state?.description}</Typography>
    </Alert>
  );
};

StateInfoField.propTypes = {
  ...Alert.propTypes,
  resource: PropTypes.string.isRequired,
};

export default StateInfoField;
