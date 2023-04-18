import React, { useMemo } from 'react';

import {
  useRecordContext,
  useResourceContext,
} from 'react-admin';

import { Chip } from '@mui/material';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';
import LongTextField from './LongTextField';

const StateField = ({ label = "app.label.workflow.state", ...props }) => {
	const toResolve = useResourceContext();
	const record = useRecordContext(props);
	const { getWorkflow } = useWorkflowContext();
	const resource = useMemo(
		() => toResolve.replace("workflow/transactions/", ""),
		[toResolve]
	);

	const workflow = useMemo(
		() => getWorkflow(resource),
		[resource, getWorkflow]
	);
	const state = useMemo(
		() =>
			(workflow &&
				workflow.getState({
					...record,
					transaction: record?.transaction || record,
				})) ||
			undefined,
		[record, workflow]
	);

	return (
		<Chip
			sx={(theme) => ({ padding: theme.spacing(1), height: "100%" })}
			color="primary"
			size="small"
			label={
				<LongTextField
					variant="body2"
					maxWidth={200}
					record={state}
					source="name"
				/>
			}
		/>
	);
};
export default StateField;
