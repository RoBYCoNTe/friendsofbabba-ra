import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { Datagrid as RaDatagrid } from 'react-admin';

import { useTheme } from '@mui/material';

import Empty from './Empty';

const Datagrid = ({ children, noWrap, alternateRows, ...props }) => {
	const theme = useTheme();
	const sx = useMemo(
		() => ({
			"& .RaDatagrid-headerCell": {
				whiteSpace: noWrap ? "nowrap" : "normal",
				backgroundColor: theme.palette.background.neutral,
			},
			"& .RaDatagrid-headerCell:first-of-type": {
				borderRadius: 0,
			},
			"& .RaDatagrid-headerCell:last-of-type": {
				borderRadius: 0,
			},
			"& .RaDatagrid-tableWrapper": {
				maxWidth: "100%",
				overflowX: "auto",
			},
			"& .RaDatagrid-rowOdd": {
				backgroundColor: alternateRows
					? theme.palette.background.default
					: "inherit",
			},
		}),
		[noWrap, theme, alternateRows]
	);

	return (
		<RaDatagrid sx={sx} empty={<Empty />} {...props}>
			{children}
		</RaDatagrid>
	);
};

Datagrid.defaultProps = {
	...RaDatagrid.defaultProps,
	noWrap: false,
	alternateRows: true,
};
Datagrid.propTypes = {
	...RaDatagrid.propTypes,
	noWrap: PropTypes.bool,
	alternateRows: PropTypes.bool,
};

export default Datagrid;
