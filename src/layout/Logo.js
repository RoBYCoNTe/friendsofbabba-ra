import React, { forwardRef } from "react";

import PropTypes from "prop-types";

import { Box } from "@mui/material";

const Logo = forwardRef(({ src, sx, ...other }, ref) => {
	if (!src) {
		return null;
	}

	return <Box component="img" src={src} sx={{ ...sx }} />;
});

Logo.propTypes = {
	src: PropTypes.string,
	sx: PropTypes.object,
};

export default Logo;
