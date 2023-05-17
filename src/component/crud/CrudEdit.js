import * as buttons from '../button/index.js';

import { Loading, useResourceContext } from 'react-admin';
import React, { useMemo } from 'react';

import Component from './Component';
import FobEdit from '../form/CreateEdit';
import Form from './Form';
import { useCrudContext } from '../../data/crud/CrudContext';
import useCustomComponents from './useCustomComponents.js';

const CrudEdit = () => {
	const { getForm, loading, components } = useCrudContext();
	const resource = useResourceContext();
	const customComponents = useCustomComponents(resource);
	const form = useMemo(() => getForm(resource), [resource, getForm]);

	if (loading || !form) {
		return <Loading />;
	}

	return (
		<FobEdit
			title={form?.titles?.edit || form?.title}
			mode="edit"
			actions={
				form?.actions &&
				form?.actions.map(({ component, componentProps }, index) => (
					<Component
						key={index}
						component={component}
						componentProps={{
							resource,
							...componentProps
						}}
						components={{
							...buttons,
							...components,
							...customComponents
						}}
					/>
				))
			}
		>
			<Form />
		</FobEdit>
	);
};

export default CrudEdit;
