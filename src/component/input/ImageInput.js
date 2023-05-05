import {
	ImageInput as RaImageInput,
	useEditContext,
	useRecordContext
} from 'react-admin';
import React, { useEffect, useMemo } from 'react';

import CoverField from '../field/CoverField';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { useWatch } from 'react-hook-form';

const ImageInput = ({ baseUrl, ...props }) => {
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
				path: `${baseUrl}/${get(record, props.source)}`,
				name: get(record, props.source)
			}
		}),
		[record, baseUrl, props.source]
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

ImageInput.propTypes = {
	baseUrl: PropTypes.string
};

export default ImageInput;
