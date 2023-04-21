import React from 'react';

import { ImageField } from 'react-admin';

const CoverField = ({ width = "150px", height = "150px", ...props }) => {
	return (
		<ImageField
			sx={(theme) => ({
				margin: 0,
				"& img": {
					borderRadius: 1.5,
					border: `1px solid ${theme.palette.divider}`,
					width: `${width} !important`,
					height: `${height} !important`,
					objectFit: "cover !important",
				},
			})}
			{...props}
		/>
	);
};
export default CoverField;
