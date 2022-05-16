import { Toolbar as RaToolbar, SaveButton, useGetIdentity } from "react-admin";
import React, { useCallback, useContext, useMemo } from "react";

import BackButton from "../button/BackButton";
import StateButton from "../button/StateButton";
import StateButtonMenu from "../button/StateButtonMenu";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-final-form";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    "& .MuiButton-root": {
      marginRight: theme.spacing(1),
    },
  },
}));
const Toolbar = ({
  children,
  mutationMode,
  validating,
  maxButtonsToDisplay = 1,
  ...props
}) => {
  const form = useForm();
  const classes = useStyles();
  const { handleSubmitWithRedirect, record } = props;
  const { loading, loaded, identity } = useGetIdentity();
  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [loading, loaded, identity]
  );
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(props.resource),
    [getWorkflow, props.resource]
  );
  const { states, save } = useMemo(() => {
    const save =
      workflow && workflow.canEdit(roles, record) && get(record, "id", 0) > 0;
    const states = (workflow && workflow.getNextStates(roles, record)) || [];
    return { states, save };
  }, [workflow, record, roles]);

  const handleClick = useCallback(() => {
    form.change(
      "state",
      get(record, "transaction.state", get(record, "state"))
    );
    handleSubmitWithRedirect("list");
  }, [form, record, handleSubmitWithRedirect]);
  if (!record) {
    return null;
  }

  return (
    <RaToolbar {...props} classes={classes}>
      {save && (
        <SaveButton
          {...props}
          color="primary"
          handleSubmitWithRedirect={handleClick}
          disabled={props.saving}
        />
      )}
      {states.length > maxButtonsToDisplay && (
        <StateButtonMenu states={states} {...props} disabled={props.saving} />
      )}
      {states.length <= maxButtonsToDisplay &&
        states.map((state) => (
          <StateButton
            key={get(state, "code")}
            state={state}
            {...props}
            disabled={props.saving}
          />
        ))}
      {React.Children.count(children) > 0 &&
        React.Children.map(children, (child, key) =>
          React.cloneElement(child, { ...props, key })
        )}

      <BackButton />
    </RaToolbar>
  );
};

export default Toolbar;
