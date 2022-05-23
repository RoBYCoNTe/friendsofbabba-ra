import {
  Button,
  useNotify,
  useRefresh,
  useUnselectAll,
  useUpdateMany,
} from "react-admin";
import React, { useCallback } from "react";

import EmailIcon from "@material-ui/icons/Email";
import moment from "moment";

const MarkAsReadedButton = ({ selectedIds = [] }) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    "notifications",
    selectedIds,
    {
      readed: moment().format(),
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
      <EmailIcon />
    </Button>
  );
};

export default MarkAsReadedButton;
