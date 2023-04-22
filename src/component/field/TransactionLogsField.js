import React, { useMemo } from 'react';

import { get } from 'lodash';
import {
  DateField,
  Labeled,
  ReferenceManyField,
  SimpleList,
  TextField,
  useRecordContext,
  useResourceContext,
} from 'react-admin';

import { useMediaQuery } from '@mui/material';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';
import Datagrid from '../list/Datagrid';
import Pagination from '../list/Pagination';
import StateField from './StateField';
import TransactionNotesField from './TransactionNotesField';
import useFieldLabel from './useFieldLabel';

const TransactionLogsField = ({ admin = false, addLabel, label, ...props }) => {
	const record = useRecordContext(props);
	const resource = useResourceContext();
	const { getWorkflow } = useWorkflowContext();
	const mobileBreakpoint = useMemo(
		() => get(props, "mobileBreakpoint", "sm"),
		[props]
	);
	const isMobile = useMediaQuery((theme) =>
		theme.breakpoints.down(mobileBreakpoint ?? "sm")
	);
	const fieldLabel = useFieldLabel({ resource: "transactions" });
	const workflow = useMemo(
		() => getWorkflow(resource),
		[getWorkflow, resource]
	);
	const id = useMemo(() => record?.id || 0, [record]);
	if (!workflow || id === 0) {
		return null;
	}

	const content = (
		<ReferenceManyField
			perPage={10}
			pagination={<Pagination />}
			reference={`workflow/transactions/${resource}`}
			sort={{ field: "Transactions.created", order: "desc" }}
			{...props}
			source="id"
			target="id"
		>
			{isMobile ? (
				<SimpleList
					primaryText={(record) => (
						<DateField
							label={fieldLabel("created")}
							record={record}
							source="created"
							showTime
						/>
					)}
					secondaryText={(record) => (
						<TransactionNotesField
							record={record}
							component="span"
							label={fieldLabel("notes")}
							source="notes"
							admin={admin}
							sortable={false}
							maxRows={6}
						/>
					)}
					linkType={false}
				/>
			) : (
				<Datagrid>
					{admin && <TextField label={fieldLabel("id")} source="id" />}
					<DateField
						label={fieldLabel("created")}
						source="created"
						showTime
						sortBy="Transactions.created"
					/>
					<TextField
						label={fieldLabel("user")}
						source="user.name"
						sortBy="Users.username"
					/>
					<TransactionNotesField
						label={fieldLabel("notes")}
						source="notes"
						admin={admin}
						sortable={false}
						maxRows={6}
					/>
					<StateField label={fieldLabel("state")} sortBy="Transactions.state" />
				</Datagrid>
			)}
		</ReferenceManyField>
	);
	return addLabel !== false ? (
		<Labeled {...props} label={props?.label} fullWidth={props?.fullWidth}>
			{content}
		</Labeled>
	) : (
		content
	);
};

export default TransactionLogsField;
