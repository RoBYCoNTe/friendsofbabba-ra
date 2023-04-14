import React, { Fragment } from 'react';

import { Button } from 'react-admin';

import { GetApp } from '@mui/icons-material';
import { Menu } from '@mui/material';

import ExportButton from './ExportButton';

const ExportToButton = ({
	exportTo = ["csv", "xlsx"],
	label = "ra.action.export",
	...props
}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (exportTo.length === 0) {
		return null;
	}

	return exportTo?.length > 1 ? (
		<Fragment>
			<Button label={label} onClick={handleClick} startIcon={<GetApp />} />
			<Menu
				id="export-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{exportTo.map((extension) => (
					<ExportButton key={extension} {...props} extension={extension} menu />
				))}
			</Menu>
		</Fragment>
	) : (
		<ExportButton {...props} extension={exportTo[0]} />
	);
};

export default ExportToButton;
