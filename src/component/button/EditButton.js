import { EditButton as RaEditButton, useGetIdentity } from "react-admin";
import React, { useContext, useMemo } from "react";

import ContentCreate from "@material-ui/icons/Create";
import ContentView from "@material-ui/icons/Visibility";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";

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
