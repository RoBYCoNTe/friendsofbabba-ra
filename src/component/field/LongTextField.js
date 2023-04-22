import React from 'react';

import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';

import { Typography } from '@mui/material';

const LongTextField = ({
	source,
	width = undefined,
	minWidth = undefined,
	maxWidth = undefined,
	maxRows = 3,
	sortable,
	basePath,
	sortBy,
	variant = "body2",
	...props
}) => {
	const record = useRecordContext(props);

	return (
		<Typography
			{...props}
			variant={variant}
			title={record?.[source]}
			sx={{
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "-webkit-box",
				WebkitBoxOrient: "vertical",
				whiteSpace: "break-spaces",
				width,
				minWidth,
				maxWidth,
				WebkitLineClamp: maxRows,
			}}
		>
			{record?.[source]}
		</Typography>
	);
};

LongTextField.propTypes = {
	minWidth: PropTypes.number,
	maxWidth: PropTypes.number,
	width: PropTypes.number,
	maxRows: PropTypes.number,
};

export default LongTextField;
