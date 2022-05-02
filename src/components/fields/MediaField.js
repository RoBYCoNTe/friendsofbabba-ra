import { FileField } from "ra-ui-materialui";
import React from "react";
import { get } from "lodash";

const MediaField = ({ ...props }) => {
  const id = get(props, "record.id", 0);
  const source = id > 0 ? "file.path" : "filepath";
  return <FileField {...props} source={source} />;
};
export default MediaField;
