import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import {
  Datagrid as RaDatagrid,
  TextField,
} from 'react-admin';

import { useTheme } from '@mui/material';

import ActionsField from '../field/ActionsField';
import Empty from './Empty';

const Datagrid = ({
	children,
	noWrap,
	actions,
	showPrimaryKey,
	primaryKey,
	rowClick,
	...props
}) => {
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
		}),
		[noWrap, theme]
	);

	return (
		<RaDatagrid
			sx={sx}
			{...props}
			rowClick={rowClick === "edit" ? undefined : rowClick}
			empty={<Empty />}
		>
			{showPrimaryKey && <TextField source={primaryKey} />}
			{React.Children.map(children, (child) => {
				if (child?.key === "EditButton" || child?.key === "DeleteButton") {
					return null;
				}
				return child;
			})}
			{actions && React.cloneElement(actions)}
		</RaDatagrid>
	);
};

Datagrid.defaultProps = {
	...RaDatagrid.defaultProps,
	noWrap: false,
	actions: <ActionsField />,
	primaryKey: "id",
	showPrimaryKey: true,
};
Datagrid.propTypes = {
	...RaDatagrid.propTypes,
	noWrap: PropTypes.bool,
	actions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
	primaryKey: PropTypes.string,
	showPrimaryKey: PropTypes.bool,
};

export default Datagrid;
