import { Loading, useResourceContext } from 'react-admin';
import React, { useMemo } from 'react';

import FobCreate from '../form/CreateEdit';
import Form from './Form';
import { useCrudContext } from '../../data/crud/CrudContext';

const CrudCreate = () => {
	const { getForm, loading } = useCrudContext();
	const resource = useResourceContext();
	const form = useMemo(() => getForm(resource), [resource, getForm]);

	if (loading || !form) {
		return <Loading />;
	}

	return (
		<FobCreate title={form?.titles?.create || form?.title} mode="create">
			<Form />
		</FobCreate>
	);
};

export default CrudCreate;
