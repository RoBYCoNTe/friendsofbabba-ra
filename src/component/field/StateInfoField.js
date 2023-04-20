import React, { useMemo } from 'react';

import {
  useRecordContext,
  useResourceContext,
} from 'react-admin';

import {
  Alert,
  AlertTitle,
  Typography,
} from '@mui/material';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';

/**
 * Allow to display the state of a workflow based on the current record.
 * This field display the 'name' and 'description' of current state inside an alert.
 *
 * You can customize few options, if you want to use just the informations
 * necessary to work with the workflow, you can use the 'WorkflowContext' (inside a form)
 * like in the example shown below.
 *
 * @example
 * import { useWorkflow, WorkflowContext } from "ra-friendsofbabba";
 * const { getWorkflow } = useContext(WorkflowContext);
 * const workflow = useMemo(() => getWorkflow(resource), [resource, getWorkflow] );
 * const state = useMemo(() => (workflow && workflow.getState(record)) || undefined, [record, workflow]);
 *
 * // The state object contains many properties like: name,
 * // label and description that you can use
 * // for your own purpose.
 *
 * @param {Object} props
 * @param {String} props.severity Severity of the associated allert.
 * @param {String} props.variant Variant of the associated allert.
 * @param {Number} props.elevation Elevation of the associated allert.
 * @returns {React.Component}
 */
const StateInfoField = ({
	severity = "info",
	variant = "standard",
	elevation = 0,
	...props
}) => {
	const resource = useResourceContext();
	const record = useRecordContext(props);
	const { getWorkflow } = useWorkflowContext();
	const workflow = useMemo(
		() => getWorkflow(resource),
		[resource, getWorkflow]
	);
	const state = useMemo(
		() => (workflow && workflow.getState(record)) || undefined,
		[record, workflow]
	);

	// TODO: Implement Alert/AlertTitle custom components
	return (
		<Alert
			severity={severity}
			variant={variant}
			elevation={elevation}
			sx={{ width: "100%", marginBottom: 2 }}
		>
			<AlertTitle sx={{ fontWeight: "bold" }}>{state?.name}</AlertTitle>
			<Typography variant="body2">{state?.description}</Typography>
		</Alert>
	);
};
export default StateInfoField;
