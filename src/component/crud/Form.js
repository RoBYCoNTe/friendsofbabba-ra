import React, { useMemo } from 'react';

import {
  Loading,
  SimpleForm,
  useResourceContext,
} from 'react-admin';

import { useCrudContext } from '../../data/cakephp/crud/CrudContext';
import useSaveMutation from '../../data/useSaveMutation';
import * as fields from '../field/index.js';
import TabbedForm from '../form/TabbedForm';
import useBackUrl from '../form/useBackUrl.js';
import * as inputs from '../input/index.js';
import Component from './Component';
import useCustomComponents from './useCustomComponents';

const Form = ({ ...props }) => {
	const { getForm, loading, components } = useCrudContext();
	const resource = useResourceContext();
	const form = useMemo(() => getForm(resource), [resource, getForm]);
	const customComponents = useCustomComponents(resource);
	const backUrl = useBackUrl({ ...props, ...form?.toolbar?.componentProps });
	const save = useSaveMutation({
		refresh: form?.refresh,
		redirect: backUrl || form?.redirect,
	});

	if (loading) {
		return <Loading />;
	}
	if (form === false || form === null) {
		return null;
	}

	return (
		<Component
			{...props}
			onSubmit={save}
			defaultValues={form?.initialValues}
			sanitizeEmptyValues={form?.sanitizeEmptyValues}
			warnWhenUnsavedChanges={form?.warnWhenUnsavedChanges}
			redirect={form?.redirect !== null ? form?.redirect : backUrl}
			component={form?.component}
			componentProps={form?.componentProps}
			components={{
				SimpleForm,
				TabbedForm,
				...components,
				...customComponents,
			}}
		>
			{form?.inputs?.map(
				({
					source,
					label,
					component,
					componentProps: { fullWidth, ...restComponentProps },
				}) => (
					<Component
						key={source}
						source={source}
						label={label}
						fullWidth={fullWidth}
						component={component}
						componentProps={{
							fullWidth,
							components: {
								...fields,
								...inputs,
								...components,
								...customComponents,
							},
							...restComponentProps,
						}}
						components={{
							...fields,
							...inputs,
							...components,
							...customComponents,
						}}
					/>
				)
			)}
		</Component>
	);
};

export default Form;
