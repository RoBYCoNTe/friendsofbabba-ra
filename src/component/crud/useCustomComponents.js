import { useMemo } from 'react';

import { get } from 'lodash';
import { useResourceContext } from 'react-admin';

import { useCrudContext } from '../../data/cakephp/crud/CrudContext';

const useCustomComponents = () => {
	const { components } = useCrudContext();
	const resource = useResourceContext();
	return useMemo(() => {
		return {
			...get(resource, "options.components"),
			...components,
		};
	}, [components, resource]);
};
export default useCustomComponents;
