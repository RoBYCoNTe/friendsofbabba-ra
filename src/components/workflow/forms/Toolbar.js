import { Toolbar as RaToolbar, SaveButton, useGetIdentity } from "react-admin";
import React, { useCallback, useContext, useMemo } from "react";

import BackButton from "../buttons/BackButton";
import ButtonListMenu from "./ButtonListMenu";
import StateButton from "../buttons/StateButton";
import { get } from "lodash";
import { useForm } from "react-final-form";
import { WorkflowContext } from "../../../data/workflow/WorkflowContext";

const Toolbar = ({
  children,
  mutationMode,
  validating,
  maxButtonsToDisplay = 1,
  ...props
}) => {
  const form = useForm();
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
    <RaToolbar {...props}>
      {save && (
        <SaveButton
          color="primary"
          {...props}
          handleSubmitWithRedirect={handleClick}
          disableElevation
        />
      )}
      {states.length > maxButtonsToDisplay && (
        <ButtonListMenu states={states} {...props} />
      )}
      {states.length <= maxButtonsToDisplay &&
        states.map((state) => (
          <StateButton key={get(state, "code")} state={state} {...props} />
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
