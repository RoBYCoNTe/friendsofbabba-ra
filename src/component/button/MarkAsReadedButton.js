import React, { useCallback } from "react";

import { DateTime } from "luxon";
import {
	Button,
	useListContext,
	useNotify,
	useRecordContext,
	useRefresh,
	useUnselectAll,
	useUpdateMany,
} from "react-admin";

import { Email } from "@mui/icons-material";

const MarkAsReadedButton = () => {
	const refresh = useRefresh();
	const notify = useNotify();
	const unselectAll = useUnselectAll();
	const { selectedIds } = useListContext();
	const record = useRecordContext();
	const [updateMany, { isLoading }] = useUpdateMany(
		"notifications",
		{
			ids: selectedIds.length > 0 ? selectedIds : [record?.id],
			data: { readed: DateTime.now().toISO() },
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
			updateMany();
		},
		[updateMany]
	);

	return (
		<Button
			label="resources.notifications.buttons.mark_as_readed"
			disabled={isLoading || record?.readed}
			onClick={handleUpdateMany}
		>
			<Email />
		</Button>
	);
};

export default MarkAsReadedButton;
