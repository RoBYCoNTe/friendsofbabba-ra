import React from "react";

import { ImageInput as RaImageInput } from "react-admin";

import CoverField from "../field/CoverField";

const ImageInput = (props) => {
	return (
		<RaImageInput {...props}>
			<CoverField source="file.path" title="file.name" />
		</RaImageInput>
	);
};
export default ImageInput;
