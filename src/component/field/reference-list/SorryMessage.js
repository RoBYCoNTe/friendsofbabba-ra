import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslate } from "react-admin";

const SorryMessage = ({ sorryText, classes }) => {
  const translate = useTranslate();
  return React.isValidElement(sorryText) ? (
    React.cloneElement(sorryText, { key: "sorry" })
  ) : (
    <Typography className={classes.sorry} key="sorry" variant="body2">
      {translate(sorryText)}
    </Typography>
  );
};
export default SorryMessage;
