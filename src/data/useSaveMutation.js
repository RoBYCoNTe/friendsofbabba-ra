import { useCallback } from 'react';

import {
  useDataProvider,
  useNotify,
  useRedirect,
  useRefresh,
  useResourceContext,
} from 'react-admin';

import createErrorMapper from './cakephp/createErrorMapper';

/**
 *
 * @param {Object} props
 * @param {Function} props.onSuccess
 * @param {Function} props.onFailure
 * @param {Function} props.errorMapper
 * @param {Function} props.transform
 * @param {String} props.type - mutation type
 * @returns
 */
const useSaveMutation = ({
	errorMapper = createErrorMapper(),
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
				const { data: response } = await dataProvider[
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
				});

				if (!onSuccess) {
					if (redir) {
						redirect(redir);
					} else if (refresh === true) {
						if (values.id > 0) {
							doRefresh();
						} else {
							doRedirect("edit", resource, response.id);
						}
					} else {
						doRedirect(redirect, resource, response.id);
					}
					notify("ra.notification." + (values.id > 0 ? "updated" : "created"), {
						type: "info",
						messageArgs: {
							smart_count: 1,
						},
					});
				} else onSuccess(response, values);
			} catch (error) {
				return errorMapper(error, notify);
			}
		},
		[
			dataProvider,
			doRedirect,
			doRefresh,
			errorMapper,
			notify,
			onSuccess,
			refresh,
			redirect,
			resource,
			transform,
			type,
			redir,
		]
	);

	return save;
};

export default useSaveMutation;
