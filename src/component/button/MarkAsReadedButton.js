import React, { useCallback } from 'react';

import moment from 'moment';
import {
  Button,
  useListContext,
  useNotify,
  useRecordContext,
  useRefresh,
  useUnselectAll,
  useUpdateMany,
} from 'react-admin';

import { Email } from '@mui/icons-material';

const MarkAsReadedButton = () => {
	const refresh = useRefresh();
	const notify = useNotify();
	const unselectAll = useUnselectAll();
	const { selectedIds } = useListContext();
	const record = useRecordContext();
	const [updateMany, { loading }] = useUpdateMany(
		"notifications",
		{
			ids: selectedIds.length > 0 ? selectedIds : [record?.id],
			data: { readed: moment().format() },
		},
		{
			onSuccess: () => {
				refresh();
				notify("resources.notifications.messages.readed.done");
				unselectAll("notifications");
			},
			onFailure: () =>
				notify("resources.notifications.messages.readed.error", "warning"),
		}
	);
	const handleUpdateMany = useCallback(
		(e) => {
			e.stopPropagation();
			e.preventDefault();
			updateMany();
		},
		[updateMany]
	);

	return (
		<Button
			label="resources.notifications.buttons.mark_as_readed"
			disabled={loading}
			onClick={handleUpdateMany}
		>
			<Email />
		</Button>
	);
};

export default MarkAsReadedButton;
