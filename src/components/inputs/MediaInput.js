import React from "react";
import { FileInput } from "react-admin";
import MediaField from "../fields/MediaField";

const MediaInput = ({ title, ...props }) => (
  <FileInput {...props}>
    <MediaField source="filepath" title={title} />
  </FileInput>
);

export default MediaInput;
