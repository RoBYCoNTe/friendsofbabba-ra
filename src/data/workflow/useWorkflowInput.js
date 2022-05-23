import { useContext, useMemo } from "react";

import { WorkflowContext } from "./WorkflowContext";
import { useGetIdentity } from "ra-core";

const useWorkflowInput = ({ resource, source, record }) => {
  const { loaded, loading, identity } = useGetIdentity();

  const roles = useMemo(
    () => (!loading && loaded ? identity?.roles : []),
    [identity, loading, loaded]
  );
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(resource),
    [resource, getWorkflow]
  );

  const { visible, disabled } = useMemo(() => {
    const visible = workflow && workflow.canReadField(source, roles, record);
    const disabled = workflow && !workflow.canEditField(source, roles, record);
    return { visible, disabled };
  }, [workflow, source, record, roles]);

  return { visible, disabled };
};
export default useWorkflowInput;
