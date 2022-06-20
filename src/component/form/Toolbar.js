import {
  DeleteButton,
  Toolbar as RaToolbar,
  SaveButton,
  useGetIdentity,
} from "react-admin";
import React, { useCallback, useContext, useMemo } from "react";

import BackButton from "../button/BackButton";
import Component from "../crud/Component";
import StateButton from "../button/StateButton";
import StateButtonMenu from "../button/StateButtonMenu";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-final-form";

const useStyles = makeStyles(
  (theme) => ({
    toolbar: {
      "& .MuiButton-root": {
        marginRight: theme.spacing(1),
      },
      justifyContent: ({ useWorkflow }) =>
        useWorkflow ? "flex-start" : "space-between",
    },
  }),
  { name: "FobToolbar" }
);

/**
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const Toolbar = ({
  children,
  buttons = [],
  buttonComponents,
  customComponents,
  mutationMode,
  validating,
  useWorkflow,
  useCustomButtons = false,
  maxButtonsToDisplay = 1,
  ...props
}) => {
  const form = useForm();
  const classes = useStyles({ useWorkflow });
  const { handleSubmitWithRedirect, record } = props;
  const { loading, loaded, identity } = useGetIdentity();
  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [loading, loaded, identity]
  );
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => (useWorkflow ? getWorkflow(props.resource) : null),
    [getWorkflow, useWorkflow, props.resource]
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
      {((!useWorkflow && !useCustomButtons) || save) && (
        <SaveButton
          {...props}
          color="primary"
          handleSubmitWithRedirect={
            useWorkflow ? handleClick : handleSubmitWithRedirect
          }
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
      {buttons &&
        buttons.map(({ component, componentProps }, index) => (
          <Component
            key={index}
            component={component}
            componentProps={{ ...props, ...componentProps }}
            components={{
              ...buttonComponents,
              ...customComponents,
            }}
          />
        ))}
      {!useWorkflow && !useCustomButtons && <DeleteButton />}
      {(useWorkflow || !useCustomButtons) && <BackButton />}
    </RaToolbar>
  );
};

export default Toolbar;
