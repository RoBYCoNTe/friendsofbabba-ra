import React, { useMemo } from 'react';

import {
  SelectInput,
  useResourceContext,
} from 'react-admin';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';

const StateInput = ({ filter = undefined, ...props }) => {
	const { getWorkflow } = useWorkflowContext();
	const resource = useResourceContext();
	const workflow = useMemo(
		() => getWorkflow(resource),
		[resource, getWorkflow]
	);

	const states = useMemo(
		() =>
			workflow
				? workflow.states.filter(
						(s) => !s.isLoop && (filter === undefined || filter(s))
				  )
				: [],
		[workflow, filter]
	);

	return (
		<SelectInput
			{...props}
			choices={states}
			optionText="name"
			optionValue="code"
			allowEmpty
			emptyText="ra.action.all"
		/>
	);
};
export default StateInput;
