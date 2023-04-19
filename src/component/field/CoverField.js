import React from "react";

import { ImageField } from "react-admin";

const CoverField = ({ width, height, ...props }) => {
	return (
		<ImageField
			sx={(theme) => ({
				margin: 0,
				marginTop: theme.spacing(1),
				marginRight: theme.spacing(1),
				borderRadius: 5,
				border: `1px solid ${theme.palette.divider}`,
				width,
				height,
			})}
			{...props}
		/>
	);
};
export default CoverField;
