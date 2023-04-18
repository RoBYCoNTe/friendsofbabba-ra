import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';

import {
  useGetIdentity,
  useRecordContext,
  useResourceContext,
} from 'react-admin';

import { ArrowDropDown } from '@mui/icons-material';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';
import LongTextField from '../field/LongTextField';
import StateField from '../field/StateField';
import ConfirmMove from '../form/ConfirmMove';

const StateCollectionInput = ({ readonly = false, admin = false }) => {
	const toResolve = useResourceContext();
	const record = useRecordContext();
	const [state, setState] = useState(null);
	const { loading, loaded, identity } = useGetIdentity();
	const roles = useMemo(
		() => (!loading && loaded ? identity?.roles : []),
		[loading, loaded, identity]
	);
	const resource = useMemo(
		() => toResolve.replace("workflow/transactions/", ""),
		[toResolve]
	);
	const { getWorkflow } = useWorkflowContext();
	const workflow = useMemo(
		() => getWorkflow(resource),
		[getWorkflow, resource]
	);
	const { currentState, nextStates } = useMemo(() => {
		const currentState =
			(workflow &&
				workflow.getState({
					...record,
					// If component is used inside TransactionLogsField the transaction is referencing
					// current record. I have to get it to make workflow work.
					transaction: record?.transaction || record,
				})) ||
			undefined;
		const nextStates = workflow.getNextStates(roles, record);
		return { currentState, nextStates };
	}, [roles, record, workflow]);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setAnchorEl(e.currentTarget);
	};

	const handleClose = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setAnchorEl(null);
		setState(null);
	};

	const handleChange = useCallback(
		(state) => (e) => {
			e.stopPropagation();
			e.preventDefault();
			setAnchorEl(null);
			setState(state);
		},
		[]
	);
	if (readonly || nextStates.length === 0) {
		// If user is not admin and there are no next states, show current state
		return <StateField record={record} resource={toResolve} />;
	}

	return (
		<div>
			<Button
				disableElevation
				endIcon={<ArrowDropDown />}
				color="primary"
				variant="contained"
				aria-controls="simple-menu"
				aria-haspopup="true"
				style={{ textAlign: "left" }}
				size="small"
				onClick={handleClick}
			>
				<LongTextField record={currentState} source="name" variant="body2" />
			</Button>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{nextStates.map((state) => (
					<MenuItem key={state?.code} onClick={handleChange(state)}>
						{state?.label}
					</MenuItem>
				))}
			</Menu>
			<ConfirmMove
				admin={admin}
				open={state !== null}
				resource={resource}
				record={record}
				state={state}
				onCancel={handleClose}
			/>
		</div>
	);
};
export default StateCollectionInput;
