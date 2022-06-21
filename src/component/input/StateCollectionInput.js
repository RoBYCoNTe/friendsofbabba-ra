import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useCallback, useContext, useMemo, useState } from "react";

import { ArrowDropDown } from "@material-ui/icons";
import ConfirmMove from "../form/ConfirmMove";
import LongTextField from "../field/LongTextField";
import StateField from "../field/StateField";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { get } from "lodash";
import { useGetIdentity } from "ra-core";

const StateCollectionInput = ({
  readonly = false,
  admin = false,
  record,
  resource: toResolve,
}) => {
  const [state, setState] = useState(null);
  const { loading, loaded, identity } = useGetIdentity();
  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [loading, loaded, identity]
  );
  const resource = useMemo(
    () => toResolve.replace("workflow/transactions/", ""),
    [toResolve]
  );
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(resource),
    [getWorkflow, resource]
  );
  const { currentState, nextStates } = useMemo(() => {
    const currentState =
      (workflow &&
        workflow.getState({
          ...record,
          // If component is used inside TransactionLogsField the transaction is referencing
          // current record. I have to get it to make workflow work.
          transaction: get(record, "transaction", record),
        })) ||
      undefined;
    const nextStates = workflow.getNextStates(roles, record);
    return { currentState, nextStates };
  }, [roles, record, workflow]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAnchorEl(null);
    setState(null);
  };

  const handleChange = useCallback(
    (state) => (e) => {
      e.stopPropagation();
      e.preventDefault();
      setAnchorEl(null);
      setState(state);
    },
    []
  );
  if (readonly || nextStates.length === 0) {
    // If user is not admin and there are no next states, show current state
    return <StateField record={record} resource={toResolve} />;
  }

  return (
    <div>
      <Button
        disableElevation
        endIcon={<ArrowDropDown />}
        color="primary"
        variant="contained"
        aria-controls="simple-menu"
        aria-haspopup="true"
        style={{ textAlign: "left" }}
        size="small"
        onClick={handleClick}
      >
        <LongTextField record={currentState} source="name" variant="body2" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {nextStates.map((state) => (
          <MenuItem key={get(state, "code")} onClick={handleChange(state)}>
            {get(state, "label")}
          </MenuItem>
        ))}
      </Menu>
      <ConfirmMove
        admin={admin}
        open={state !== null}
        resource={resource}
        record={record}
        state={state}
        onCancel={handleClose}
      />
    </div>
  );
};
export default StateCollectionInput;
