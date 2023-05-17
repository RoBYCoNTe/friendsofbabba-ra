import { get } from 'lodash';
import { useCrudContext } from '../../data/crud/CrudContext';
import { useMemo } from 'react';
import { useResourceContext } from 'react-admin';

const useCustomComponents = () => {
	const { components } = useCrudContext();
	const resource = useResourceContext();
	return useMemo(() => {
		return {
			...get(resource, 'options.components'),
			...components
		};
	}, [components, resource]);
};
export default useCustomComponents;
