import React from 'react';

import PropTypes from 'prop-types';
import {
  ChipField,
  useRecordContext,
} from 'react-admin';

import { useTheme } from '@mui/material';

const ColorField = (props) => {
	const { labelSource, sx, ...rest } = props;
	const record = useRecordContext(props);
	const theme = useTheme();
	const color = theme.palette.getContrastText(record?.color || '#000');

	return (
		<ChipField
			{...rest}
			record={{
				[props.source]: record?.[labelSource || props.source]
			}}
			sx={{
				backgroundColor: record?.color || 'initial',
				color,
				...(sx || {})
			}}
		/>
	);
};

ColorField.propTypes = {
	labelSource: PropTypes.string
};

export default ColorField;
