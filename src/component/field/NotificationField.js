import { Box, Typography } from "@material-ui/core";
import { MarkAsReadedButton, MarkAsUnreadedButton } from "../button/index.js";
import React, { Fragment, useMemo } from "react";

import moment from "moment";
import { useTranslate } from "ra-core";

const NotificationField = ({ record }) => {
  const translate = useTranslate();
  const readed = useMemo(
    () =>
      record?.readed
        ? moment(record?.readed).format(translate("app.date_format.long"))
        : false,
    [record?.readed, translate]
  );

  return (
    <Fragment>
      <Typography variant="subtitle1">
        <Box fontWeight={"bold"}> {record?.title}</Box>
      </Typography>
      <Typography variant="body1">{record?.content}</Typography>
      {readed && (
        <Typography variant="caption" display="block">
          {translate("resources.notifications.readed", { readed })}
        </Typography>
      )}

      {record?.readed ? (
        <MarkAsUnreadedButton selectedIds={[record?.id]} />
      ) : (
        <MarkAsReadedButton selectedIds={[record?.id]} />
      )}
    </Fragment>
  );
};
export default NotificationField;
