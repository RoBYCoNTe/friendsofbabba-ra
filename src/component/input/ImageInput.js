import { ImageInput as RaImageInput, useRecordContext } from 'react-admin';
import React, { useMemo } from 'react';

import CoverField from '../field/CoverField';
import { get } from 'lodash';
import { useWatch } from 'react-hook-form';

const ImageInput = ({ ...props }) => {
	const file = useWatch({ name: props.source });
	const record = useRecordContext(props);
	const source = useMemo(
		() => (record?.id && !file?.rawFile ? 'file.path' : 'src'),
		[record?.id, file?.rawFile]
	);
	const title = useMemo(
		() => (record?.id && !file?.rawFile ? 'file.name' : 'title'),
		[record?.id, file?.rawFile]
	);
	const _record = useMemo(
		() => ({
			...record,
			file: {
				path: get(record, `_${props.source}`),
				name: get(record, props.source)
			}
		}),
		[record, props.source]
	);
	return (
		<RaImageInput {...props} record={_record} accept="image/*">
			<CoverField
				record={{ ..._record, ...file }}
				source={source}
				title={title}
			/>
		</RaImageInput>
	);
};

ImageInput.propTypes = {};

export default ImageInput;
