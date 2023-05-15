import {
	Button,
	useListContext,
	useNotify,
	useRecordContext,
	useRefresh,
	useResourceContext,
	useUnselectAll,
	useUpdateMany
} from 'react-admin';
import React, { useCallback } from 'react';

import { Email } from '@mui/icons-material';
import dayjs from 'dayjs';

const MarkAsReadedButton = () => {
	const refresh = useRefresh();
	const notify = useNotify();
	const unselectAll = useUnselectAll();
	const resource = useResourceContext();
	const { selectedIds } = useListContext();
	const record = useRecordContext();
	const [updateMany, { isLoading }] = useUpdateMany(
		resource,
		{
			ids: selectedIds.length > 0 ? selectedIds : [record?.id],
			data: { readed: dayjs().format('YYYY-MM-DD HH:mm:ss') }
		},
		{
			onSuccess: () => {
				refresh();
				notify('resources.notifications.messages.readed.done');
				unselectAll(resource);
			},
			onError: () =>
				notify('resources.notifications.messages.readed.error', 'warning'),

			onFailure: () =>
				notify('resources.notifications.messages.readed.error', 'warning')
		}
	);
	const handleUpdateMany = useCallback(() => {
		updateMany();
	}, [updateMany]);

	return (
		<Button
			label="resources.notifications.buttons.mark_as_readed"
			disabled={isLoading || record?.readed !== null}
			onClick={handleUpdateMany}
		>
			<Email />
		</Button>
	);
};

export default MarkAsReadedButton;
