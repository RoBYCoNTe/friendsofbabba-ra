import React, { useMemo } from 'react';

import { useResourceContext } from 'react-admin';

import { useCrudContext } from '../../data/cakephp/crud/CrudContext';
import { useBackUrl } from '../form';
import CreateEdit from '../form/CreateEdit';
import Form from './Form';

const Create = () => {
	const { getForm } = useCrudContext();
	const resource = useResourceContext();
	const form = useMemo(() => getForm(resource), [resource, getForm]);
	const backUrl = useBackUrl({ ...form?.toolbar?.componentProps });
	const redirect = form?.redirect !== null ? form?.redirect : backUrl;
	const hasTitle = useMemo(() => form?.titles?.create || form?.title, [form]);

	return (
		<CreateEdit
			title={hasTitle && (form?.titles?.create || form?.title)}
			mode="create"
			redirect={redirect}
		>
			<Form />
		</CreateEdit>
	);
};

export default Create;
