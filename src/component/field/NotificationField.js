import { Box, Typography } from "@material-ui/core";
import { MarkAsReadedButton, MarkAsUnreadedButton } from "../button/index.js";
import React, { Fragment, useMemo } from "react";

import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useTranslate } from "ra-core";

const useStyles = makeStyles((theme) => ({
  content: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    whiteSpace: "break-spaces",
  },
}));
const NotificationField = ({ record }) => {
  const translate = useTranslate();
  const classes = useStyles();
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
      <Typography
        variant="body1"
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: record?.content }}
      />
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
