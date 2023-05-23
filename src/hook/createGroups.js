import { Dashboard } from '@mui/icons-material';

const createGroups = ({
	menuGroups,
	resources,
	permissions,
	badges,
	hasDashboard
}) => {
	const dashboardResource = hasDashboard
		? {
				dashboard: {
					name: 'dashboard',
					icon: Dashboard,
					options: {
						group: 'dashboard'
					}
				}
		  }
		: {};

	let _resources = {
		...dashboardResource,
		...resources
	};

	if (!menuGroups || menuGroups.length === 0) {
		// Self generate menu groups
		menuGroups = Object.values(_resources)
			.map((resource) => resource.options?.group)
			.filter((group) => group !== undefined)
			.filter((group, index, self) => self.indexOf(group) === index);
	}

	const groups = Object.values(
		menuGroups.reduce((acc, group) => {
			const groupResources = Object.values(_resources)
				.filter(
					(resource) => resource.options?.group === group && resource?.hasList
				)
				.map((resource) => ({
					...resource,
					...(resource?.options || {}),
					badge:
						badges?.[resource.name] && badges?.[resource.name].show === true
							? badges?.[resource.name]
							: null,
					path: `/${resource.name}`
				}));

			const groupResourcesWithPermissions = groupResources.filter(
				(resource) =>
					permissions &&
					(resource.options.roles === undefined ||
						resource.options.roles.some((role) => permissions.includes(role)))
			);

			groupResources.sort((a, b) =>
				a?.order < b?.order ? -1 : a?.order > b?.order ? 1 : 0
			);

			return [...acc, { group, resources: groupResourcesWithPermissions }];
		}, [])
	).filter((group) => group.resources.length > 0);

	return groups;
};

export default createGroups;
