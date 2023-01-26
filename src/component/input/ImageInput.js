import { CoverField } from "../index";
import { ImageInput as RaImageInput } from "react-admin";
import React from "react";

const ImageInput = (props) => {
  return (
    <RaImageInput {...props}>
      <CoverField source="file.path" title="file.name" />
    </RaImageInput>
  );
};
export default ImageInput;
