import React, { useMemo } from 'react';

import {
  get,
  set,
} from 'lodash';
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
	const backgroundColor = get(record, props.source);
	const color = theme.palette.getContrastText(backgroundColor || '#000');
	const newRecord = useMemo(
		() => set({}, props.source, get(record, labelSource || props.source, '-')),
		[record, props.source, labelSource]
	);

	return (
		<ChipField
			{...rest}
			record={newRecord}
			sx={{
				backgroundColor: backgroundColor || 'initial',
				color,
				...(sx || {})
			}}
		/>
	);
};

ColorField.propTypes = {
	...ChipField.propTypes,
	labelSource: PropTypes.string
};

export default ColorField;
