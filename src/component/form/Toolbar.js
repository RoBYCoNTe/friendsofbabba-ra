import React, {
  useCallback,
  useMemo,
} from 'react';

import {
  SaveButton,
  Toolbar as RaToolbar,
  useGetIdentity,
  useResourceContext,
  useSaveContext,
} from 'react-admin';
import {
  useFormContext,
  useFormState,
} from 'react-hook-form';

import { useWorkflowContext } from '../../data/workflow/WorkflowContext';
import BackButton from '../button/BackButton';
import DeleteWithConfirmButton from '../button/DeleteWithConfirmButton';
import StateButton from '../button/StateButton';
import StateButtonMenu from '../button/StateButtonMenu';
import Component from '../crud/Component';
import useBackUrl from './useBackUrl';

/**
 * @param {Object} props
 */
const Toolbar = ({
	backRedirect,
	backReferenceTarget,
	backReference,
	backTab = 1,
	children,
	buttons = [],
	components = [],
	mutationMode,
	validating,
	useWorkflow,
	useCustomButtons = false,
	useBackButton = true,
	useDeleteButton = true,
	maxButtonsToDisplay = 1,
	stateFilter,
	...props
}) => {
	const resource = useResourceContext();
	const { getValues, setValue } = useFormContext();
	const { isDirty } = useFormState();
	const { saving } = useSaveContext();
	const record = getValues();
	const backUrl = useBackUrl({
		backRedirect,
		backReferenceTarget,
		backReference,
		backTab,
		...props,
	});
	const { isLoading: loading, data: identity } = useGetIdentity();
	const roles = useMemo(
		() => (!loading ? identity?.roles : []),
		[loading, identity]
	);
	const { getWorkflow } = useWorkflowContext();
	const workflow = useMemo(
		() => (useWorkflow ? getWorkflow(resource) : null),
		[getWorkflow, useWorkflow, resource]
	);
	const { states, save } = useMemo(() => {
		const save =
			workflow && workflow.canEdit(roles, record) && (record?.id || 0) > 0;
		const states = (workflow && workflow.getNextStates(roles, record)) || [];
		return { states, save };
	}, [workflow, record, roles]);
	const statesToDisplay = useMemo(
		() => (stateFilter ? states.filter(stateFilter) : states),
		[states, stateFilter]
	);
	const handleClick = useCallback(() => {
		setValue("state", record?.transaction?.state || record?.state);
	}, [setValue, record]);

	if (!record) {
		return null;
	}

	return (
		<RaToolbar
			sx={(theme) => ({
				"& .MuiButton-root": {
					marginRight: theme.spacing(1),
				},
				justifyContent: ({ useWorkflow }) =>
					useWorkflow ? "flex-start" : "space-between",
			})}
		>
			{((!useWorkflow && !useCustomButtons) || save) && (
				<SaveButton
					color="primary"
					redirect={backUrl}
					onClick={useWorkflow ? handleClick : undefined}
					disabled={saving || !isDirty}
				/>
			)}
			{statesToDisplay.length > maxButtonsToDisplay && (
				<StateButtonMenu
					states={statesToDisplay}
					saving={saving}
					disabled={saving || !isDirty}
				/>
			)}
			{statesToDisplay.length <= maxButtonsToDisplay &&
				statesToDisplay.map((state) => (
					<StateButton
						key={state?.code}
						state={state}
						saving={saving}
						disabled={saving || !isDirty}
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
						addLabel={false}
						component={component}
						componentProps={{ ...props, ...componentProps }}
						components={components}
					/>
				))}
			{!useWorkflow &&
				!useCustomButtons &&
				useDeleteButton &&
				record?.id > 0 && <DeleteWithConfirmButton redirect={backUrl} />}
			{(useWorkflow || !useCustomButtons) && useBackButton && (
				<BackButton to={backUrl} />
			)}
		</RaToolbar>
	);
};

export default Toolbar;
