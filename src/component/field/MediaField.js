import React from 'react';

import {
  FileField,
  useRecordContext,
} from 'react-admin';

const MediaField = ({ disabled, ...props }) => {
	const record = useRecordContext(props);
	const id = record?.id || 0;
	const source = id > 0 ? "file.path" : "filepath";
	return (
		<FileField
			{...props}
			source={source}
			sx={{
				...(disabled && {
					display: "block",
					clear: "both",
					width: "100%",
				}),
			}}
		/>
	);
};
export default MediaField;
