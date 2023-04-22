import { LinearProgress, Typography } from '@mui/material';

import React from 'react';
import { get } from 'lodash';
import { useRecordContext } from 'react-admin';

const ProgressField = ({ source, ...props }) => {
	const record = useRecordContext(props);
	return (
		<>
			<LinearProgress
				sx={(theme) => ({
					height: 10,
					width: 100,
					borderRadius: 0.5,
					mb: 1
				})}
				variant="determinate"
				color={get(record, source) >= 100 ? 'primary' : 'secondary'}
				value={get(record, source, 0)}
			/>
			<Typography
				variant="caption"
				sx={() => ({
					display: 'block',
					textAlign: 'center'
				})}
			>
				{get(record, source, 0).toFixed(2)}%
			</Typography>
		</>
	);
};
export default ProgressField;
