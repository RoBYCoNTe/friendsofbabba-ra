import { Dashboard } from "@mui/icons-material";

const createGroups = ({
	menuGroups,
	resources,
	permissions,
	badges,
	hasDashboard,
}) => {
	const dashboardResource = hasDashboard
		? {
				dashboard: {
					name: "dashboard",
					icon: Dashboard,
					options: {
						group: "dashboard",
					},
				},
		  }
		: {};

	let _resources = {
		...dashboardResource,
		...resources,
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
					badge: badges?.[resource.name] || null,
					path: `/${resource.name}`,
				}));
			const hasPermissions = groupResources.every(
				(resource) =>
					permissions &&
					permissions.every(
						(permission) =>
							resource.options.roles === undefined ||
							resource.options.roles.includes(permission)
					)
			);

			groupResources.sort((a, b) =>
				a?.order < b?.order ? -1 : a?.order > b?.order ? 1 : 0
			);

			return hasPermissions
				? [
						...acc,
						{
							group,
							resources: groupResources,
						},
				  ]
				: acc;
		}, [])
	).filter((group) => group.resources.length > 0);

	return groups;
};

export default createGroups;
