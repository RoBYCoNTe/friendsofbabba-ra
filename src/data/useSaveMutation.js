import { useCallback } from 'react';

import {
  useDataProvider,
  useNotify,
  useRedirect,
  useRefresh,
  useResourceContext,
} from 'react-admin';

/**
 *
 * @param {Object} props
 * @param {Function} props.onSuccess
 * @param {Function} props.onFailure
 * @param {Function} props.transform
 * @param {String} props.type - mutation type
 * @returns
 */
const useSaveMutation = ({
	onSuccess = undefined,
	redir = null,
	redirect,
	refresh = true,
	transform = undefined,
	type = null,
}) => {
	const resource = useResourceContext();
	const doRedirect = useRedirect();
	const doRefresh = useRefresh();
	const notify = useNotify();
	const dataProvider = useDataProvider();

	const save = useCallback(
		async (values) => {
			try {
				await dataProvider[
					type === null
						? values.id && values.id > 0
							? "update"
							: "create"
						: type
				](resource, {
					data: {
						id: values.id,
						...(transform ? transform(values) : values),
					},
				}).then(({ data: response }) => {
					if (!onSuccess) {
						doRefresh();
						if (redir) {
							redirect(redir);
						} else if (refresh === true) {
							if (values.id > 0) {
								doRefresh();
							} else {
								doRedirect("edit", resource, response.id);
							}
						} else {
							if (redirect === "edit" || redirect === "show") {
								doRedirect(redirect, resource, response.id);
							} else {
								doRedirect(redirect, resource);
							}
						}
						notify(
							"ra.notification." + (values.id > 0 ? "updated" : "created"),
							{
								type: "info",
								messageArgs: {
									smart_count: 1,
								},
							}
						);
					} else onSuccess(response, values);
				});
			} catch (error) {
				return error?.body?.errors;
			}
		},
		[
			dataProvider,
			doRedirect,
			doRefresh,
			notify,
			redirect,
			refresh,
			resource,
			transform,
			type,
			onSuccess,
			redir,
		]
	);

	return save;
};

export default useSaveMutation;
