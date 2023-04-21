import React from 'react';

import { ImageInput as RaImageInput } from 'react-admin';

import CoverField from '../field/CoverField';

const ImageInput = (props) => {
	return (
		<RaImageInput {...props}>
			<CoverField source="src" title="title" />
		</RaImageInput>
	);
};
export default ImageInput;
