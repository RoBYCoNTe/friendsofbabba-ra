import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslate } from "react-admin";

const EmptyMessage = ({ classes, emptyText }) => {
  const translate = useTranslate();
  return React.isValidElement(emptyText) ? (
    React.cloneElement(emptyText, { key: "empty" })
  ) : (
    <Typography className={classes.empty} key="empty">
      {translate(emptyText)}
    </Typography>
  );
};
export default EmptyMessage;
