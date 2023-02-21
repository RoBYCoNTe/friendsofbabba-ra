import { FileField } from "ra-ui-materialui";
import React from "react";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    clear: "both",
  },
}));
const MediaField = ({ ...props }) => {
  const classes = useStyles();
  const id = get(props, "record.id", 0);
  const source = id > 0 ? "file.path" : "filepath";
  return <FileField {...props} source={source} className={classes.root} />;
};
export default MediaField;
