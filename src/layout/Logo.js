import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import { useFobContext } from '../context';

const Logo = forwardRef(({ sx, ...other }, ref) => {
	const { logo: src, logoSx = {} } = useFobContext();

	if (!src) {
		return null;
	}

	const logo = (
		<Box
			component="img"
			src={src}
			sx={{ cursor: "pointer", ...logoSx, ...sx }}
		/>
	);

	return <>{logo}</>;
});

Logo.propTypes = {
	sx: PropTypes.object,
};

export default Logo;
