import {
  Button,
  useNotify,
  useRefresh,
  useUnselectAll,
  useUpdateMany,
} from "react-admin";
import React, { useCallback } from "react";

import { Drafts } from "@material-ui/icons";

const MarkAsUnreadedButton = ({ selectedIds = [] }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    "notifications",
    selectedIds,
    { readed: null },
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
      e.stopPropagation();
      updateMany();
    },
    [updateMany]
  );

  return (
    <Button
      color="secondary"
      label="resources.notifications.buttons.mark_as_unreaded"
      disabled={loading}
      onClick={handleUpdateMany}
    >
      <Drafts />
    </Button>
  );
};

export default MarkAsUnreadedButton;
