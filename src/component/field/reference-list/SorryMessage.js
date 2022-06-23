import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslate } from "react-admin";

const SorryMessage = ({ sorryText, classes }) => {
  const translate = useTranslate();
  return React.isValidElement(sorry) ? (
    React.cloneElement(sorry, { key: "sorry" })
  ) : (
    <Typography className={classes.sorry} key="sorry">
      {translate(sorryText)}
    </Typography>
  );
};
export default SorryMessage;
