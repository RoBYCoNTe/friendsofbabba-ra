import React, { useCallback, useEffect, useState } from 'react';

import { get } from 'lodash';
import {
	useDataProvider,
	useRecordContext,
	useResourceContext
} from 'react-admin';

import { TextField } from '@mui/material';

const RecordInput = ({ source, minWidth = 300 }) => {
	const resource = useResourceContext();
	const record = useRecordContext();
	const [value, setValue] = useState(get(record, source, ''));
	const [updating, setUpdating] = useState(false);
	const handleChange = useCallback((evt) => setValue(evt.target.value), []);
	const dataProvider = useDataProvider();

	const handleKeyPress = useCallback(
		(evt) => {
			if (evt.key !== 'Enter') {
				return;
			}
			setUpdating(true);
			dataProvider
				.update(resource, {
					id: record.id,
					data: {
						id: record?.id,
						[source]: value,
						_changed: source
					}
				})
				.then(() => setUpdating(false));
		},
		[value, dataProvider, resource, record, source]
	);
	const handleBlur = useCallback(() => {
		if (get(record, source) === value) {
			return;
		}
		setUpdating(true);
		dataProvider
			.update(resource, {
				id: record.id,
				data: {
					id: record?.id,
					[source]: value,
					_changed: source
				}
			})
			.then(() => setUpdating(false));
	}, [value, dataProvider, resource, source, record]);
	useEffect(() => setValue(get(record, source)), [record, source]);

	return (
		<TextField
			value={value}
			disabled={updating}
			onChange={handleChange}
			onKeyPress={handleKeyPress}
			onBlur={handleBlur}
			style={{ minWidth, width: '100%' }}
			multiline
			InputProps={{ 'arial-label': 'naked' }}
			size="small"
		/>
	);
};

export default RecordInput;
