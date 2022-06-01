import { EditButton as RaEditButton, useGetIdentity } from "react-admin";
import React, { useContext, useMemo } from "react";

import { Create as ContentCreate } from "@material-ui/icons";
import { Visibility as ContentView } from "@material-ui/icons";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";

/**
 * Renders Edit button connected to the workflow. The button is able to
 * check if user has required permissions and based on this can show "View"
 * or "Edit" label on the button itself.
 *
 * This button can be used inside list or show views.
 * To use this button you have to configure WorkflowContext into your app.
 *
 * @param {Object} props
 *
 * @returns {React.ReactElement}
 */
const EditButton = ({ record, resource, ...props }) => {
  const { getWorkflow } = useContext(WorkflowContext);
  const { loaded, loading, identity } = useGetIdentity();
  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [loaded, identity, loading]
  );
  const workflow = useMemo(
    () => getWorkflow(resource),
    [getWorkflow, resource]
  );

  if (!workflow) {
    return <RaEditButton disabled={true} />;
  }

  const canEdit = workflow.canEdit(roles, record);
  const label = canEdit ? "ra.action.edit" : "ra.action.view";
  const icon = canEdit ? <ContentCreate /> : <ContentView />;
  return <RaEditButton icon={icon} label={label} record={record} {...props} />;
};

export default EditButton;
