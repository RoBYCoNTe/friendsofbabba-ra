import { useMemo } from 'react';

import {
  useGetIdentity,
  usePermissions,
  useResourceDefinitions,
} from 'react-admin';

import { useCrudContext } from '../data';
import createGroups from './createGroups';

const useMenu = ({ hasDashboard, menuGroups }) => {
	const resources = useResourceDefinitions();
	const { isLoading: loadingIdentity, data: identity } = useGetIdentity();
	const { permissions } = usePermissions();
	const { data } = useCrudContext();
	const badges = useMemo(
		() =>
			data
				? Object.keys(data).reduce(
						(badges, k) =>
							data[k].badge != null
								? { ...badges, [k]: data[k].badge }
								: badges,
						{}
				  )
				: {},
		[data]
	);

	const menu = useMemo(() => {
		if (
			loadingIdentity ||
			!identity ||
			identity === null ||
			identity?.id <= 0
		) {
			return null;
		}

		const groups = createGroups({
			menuGroups,
			resources,
			permissions,
			badges,
			hasDashboard,
		});

		return groups;
	}, [
		loadingIdentity,
		identity,
		menuGroups,
		resources,
		permissions,
		badges,
		hasDashboard,
	]);

	const isLoading = useMemo(() => loadingIdentity, [loadingIdentity]);

	return {
		menu,
		isLoading,
	};
};

export default useMenu;
