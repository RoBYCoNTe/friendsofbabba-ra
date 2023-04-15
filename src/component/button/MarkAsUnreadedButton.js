import React, { useCallback } from 'react';

import {
  Button,
  useListContext,
  useNotify,
  useRecordContext,
  useRefresh,
  useUnselectAll,
  useUpdateMany,
} from 'react-admin';

import { Drafts } from '@mui/icons-material';

const MarkAsUnreadedButton = () => {
	const refresh = useRefresh();
	const notify = useNotify();
	const unselectAll = useUnselectAll();
	const { selectedIds } = useListContext();
	const record = useRecordContext();

	const [updateMany, { isLoading }] = useUpdateMany(
		"notifications",
		{
			ids: selectedIds.length > 0 ? selectedIds : [record?.id],
			data: { readed: null },
		},
		{
			onSuccess: () => {
				refresh();
				notify("resources.notifications.messages.unreaded.done");
				unselectAll("notifications");
			},
			onFailure: () =>
				notify("resources.notifications.messages.unreaded.error", "warning"),
		}
	);

	const handleUpdateMany = useCallback(
		(e) => {
			updateMany();
		},
		[updateMany]
	);

	return (
		<Button
			color="secondary"
			label="resources.notifications.buttons.mark_as_unreaded"
			disabled={isLoading || (record && !record?.readed)}
			onClick={handleUpdateMany}
		>
			<Drafts />
		</Button>
	);
};

export default MarkAsUnreadedButton;
