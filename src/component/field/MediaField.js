import { FileField } from "ra-ui-materialui";
import React from "react";
import classnames from "classnames";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  disabled: {
    display: "block",
    clear: "both",
    width: "100%",
  },
}));
const MediaField = ({ disabled, ...props }) => {
  const classes = useStyles();
  const id = get(props, "record.id", 0);
  const source = id > 0 ? "file.path" : "filepath";
  console.info("disabled: ", disabled);
  return (
    <FileField
      {...props}
      source={source}
      className={classnames(disabled && classes.disabled)}
    />
  );
};
export default MediaField;
