import { useContext, useMemo } from "react";

import { useGetIdentity } from "react-admin";

import { WorkflowContext } from "./WorkflowContext";

const useWorkflowInput = ({ resource, source, record }) => {
	const { data: identity, isLoading } = useGetIdentity();

	const roles = useMemo(
		() => (!isLoading ? identity?.roles : []),
		[identity, isLoading]
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
