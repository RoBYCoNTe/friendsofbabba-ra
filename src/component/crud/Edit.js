import React, { useMemo } from 'react';

import { useResourceContext } from 'react-admin';

import { useCrudContext } from '../../data/cakephp/crud/CrudContext';
import * as buttons from '../button/index.js';
import CreateEdit from '../form/CreateEdit';
import useBackUrl from '../form/useBackUrl';
import Component from './Component';
import Form from './Form';
import useCustomComponents from './useCustomComponents.js';

const Edit = () => {
	const { getForm, components } = useCrudContext();
	const resource = useResourceContext();
	const customComponents = useCustomComponents(resource);
	const form = useMemo(() => getForm(resource), [resource, getForm]);
	const backUrl = useBackUrl({ ...form?.toolbar?.componentProps });
	const redirect = form?.redirect !== null ? form?.redirect : backUrl;
	const hasTitle = useMemo(() => form?.titles?.edit || form?.title, [form]);

	return (
		<CreateEdit
			title={hasTitle && (form?.titles?.create || form?.title)}
			mode="edit"
			redirect={redirect}
			actions={
				form?.actions &&
				form?.actions.map(({ component, componentProps }, index) => (
					<Component
						key={index}
						component={component}
						componentProps={{
							resource,
							...componentProps,
						}}
						components={{
							...buttons,
							...components,
							...customComponents,
						}}
					/>
				))
			}
		>
			<Form />
		</CreateEdit>
	);
};

export default Edit;
