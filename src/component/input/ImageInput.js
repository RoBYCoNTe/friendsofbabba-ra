import React, { useMemo } from 'react';

import {
  ImageInput as RaImageInput,
  useRecordContext,
} from 'react-admin';

import CoverField from '../field/CoverField';

const ImageInput = (props) => {
	const record = useRecordContext(props);
	const source = useMemo(
		() => (record?.id > 0 ? "file.path" : "src"),
		[record]
	);
	const title = useMemo(
		() => (record?.id > 0 ? "file.name" : "title"),
		[record]
	);
	return (
		<RaImageInput {...props}>
			<CoverField source={source} title={title} />
		</RaImageInput>
	);
};
export default ImageInput;
